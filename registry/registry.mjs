
import {DatabaseSync} from 'node:sqlite';
import {randomUUID} from 'node:crypto';
export class Registry {
 constructor(filename,leaseSeconds){
  if(!Number.isInteger(leaseSeconds)||leaseSeconds<1)throw Error('Explicit lease policy required');
  this.leaseSeconds=leaseSeconds;
  this.db=new DatabaseSync(filename);
  this.db.exec("PRAGMA journal_mode=WAL; PRAGMA synchronous=FULL; PRAGMA busy_timeout=5000;");
  this.db.exec("CREATE TABLE IF NOT EXISTS projects(id TEXT PRIMARY KEY,revision INTEGER NOT NULL,state TEXT NOT NULL); CREATE TABLE IF NOT EXISTS events(project TEXT,event_id TEXT,revision INTEGER,body TEXT,PRIMARY KEY(project,event_id));");
 }
 snapshot(project){
  const row=this.db.prepare('SELECT * FROM projects WHERE id=?').get(project);
  return row?{project,revision:row.revision,state:JSON.parse(row.state),serverTime:Date.now(),leasePolicySeconds:this.leaseSeconds}:null;
 }
 init(project,eventId){
  if(!project||!eventId)throw Error('project/event required');
  this.db.exec('BEGIN IMMEDIATE');
  try{
   const existing=this.snapshot(project);if(existing){this.db.exec('COMMIT');return existing;}
   const state={records:{},initializationEvent:eventId};
   this.db.prepare('INSERT INTO projects VALUES(?,?,?)').run(project,0,JSON.stringify(state));
   this.db.prepare('INSERT INTO events VALUES(?,?,?,?)').run(project,eventId,0,JSON.stringify({op:'initialize',at:Date.now()}));
   this.db.exec('COMMIT');return this.snapshot(project);
  }catch(e){this.db.exec('ROLLBACK');throw e;}
 }
 transact(req){
  const {project,expectedRevision,eventId,op,contentId,runId}=req;
  if(!project||!eventId||!contentId||!runId||!Number.isInteger(expectedRevision))throw Error('Missing transaction identity');
  this.db.exec('BEGIN IMMEDIATE');
  try{
   const prior=this.db.prepare('SELECT body,revision FROM events WHERE project=? AND event_id=?').get(project,eventId);
   if(prior){
    const event=JSON.parse(prior.body);
    if(event.request!==JSON.stringify(req))throw Error('Event id reused with different payload');
    this.db.exec('COMMIT');return {...this.snapshot(project),idempotent:true,committedRevision:prior.revision,eventId};
   }
   const snap=this.snapshot(project);if(!snap)throw Error('Not initialized');
   if(snap.revision!==expectedRevision)throw Error('CAS_CONFLICT: refresh and re-evaluate semantic matches');
   const now=Date.now(),state=snap.state;
   let rec=state.records[contentId];
   const lease=()=>{if(!rec?.draft||rec.draft.owner!==runId||rec.draft.reservation!=='ACTIVE'||rec.draft.expires<=now)throw Error('Lease lost: reacquire and recheck');};
   const semantic=()=>{
    const s=req.semantic;
    if(!s||s.checkedRevision!==expectedRevision||s.result!=='PASS'||!s.evidenceRef||!Array.isArray(s.comparedBlockingIds))throw Error('Fresh semantic evidence required; hash alone insufficient');
    const required=Object.entries(state.records).filter(([id,r])=>id!==contentId&&(r.terminal||r.draft?.reservation==='ACTIVE'&&r.draft.expires>now)).map(([id])=>id);
    for(const id of required)if(!s.comparedBlockingIds.includes(id))throw Error('Incomplete semantic coverage');
   };
   const exact=()=>{if(!rec?.draft||req.contentRevision!==rec.draft.revision)throw Error('Wrong draft revision');};
   const decision=()=>{if(!req.userDecision||req.userDecision.contentId!==contentId||req.userDecision.contentRevision!==req.contentRevision||!req.userDecision.text||!req.userDecision.scope)throw Error('Exact explicit user decision required');};
   const fingerprint=()=>{if(!req.fingerprint||!req.contentSnapshotRef||!req.fingerprintEvidenceRef)throw Error('Fingerprint/snapshot evidence required');};
   const reserveDraft=()=>{rec.draft={revision:req.contentRevision,owner:runId,reservation:'ACTIVE',expires:now+this.leaseSeconds*1000,decision:'CANDIDATE',fingerprint:req.fingerprint,snapshotRef:req.contentSnapshotRef};};
   switch(op){
    case 'reserve':
     if(rec?.terminal)throw Error('Terminal lock: use authorized edit/reopen');
     if(rec?.draft?.reservation==='ACTIVE'&&rec.draft.expires>now)throw Error('Already reserved');
     if(!Number.isInteger(req.contentRevision)||req.contentRevision<1)throw Error('Revision required');
     semantic();fingerprint();
     rec=rec||{revisions:{}};state.records[contentId]=rec;reserveDraft();break;
    case 'reacquire':
     if(!rec?.draft)throw Error('No durable draft');
     if(rec.draft.reservation==='ACTIVE'&&rec.draft.expires>now)throw Error('Lease still active');
     exact();semantic();rec.draft.owner=runId;rec.draft.reservation='ACTIVE';rec.draft.expires=now+this.leaseSeconds*1000;break;
    case 'renew':
     lease();exact();rec.draft.expires=now+this.leaseSeconds*1000;break;
    case 'release':
     lease();exact();if(!['ENGINE_REJECTED','ABANDONED','USER_REJECTED_DRAFT'].includes(req.outcome))throw Error('Release outcome required');
     if(req.outcome==='USER_REJECTED_DRAFT')decision();
     rec.draft.reservation='RELEASED';rec.draft.outcome=req.outcome;break;
    case 'reconcile_expiry':
     if(!rec?.draft||rec.draft.expires>now||rec.draft.reservation!=='ACTIVE')throw Error('No expired lease');
     rec.draft.reservation='RELEASED';rec.draft.releaseReason='LEASE_EXPIRED';break;
    case 'edit_approved':
     if(!rec?.approved||rec.terminal==='REJECTED_LOCKED')throw Error('No active approved pointer');
     decision();if(req.userDecision.scope!=='USER_EDIT_REQUEST')throw Error('Edit authorization required');
     if(rec.draft?.reservation==='ACTIVE'&&rec.draft.expires>now)throw Error('Draft already active');
     if(req.contentRevision<=rec.approved.revision)throw Error('New revision required');
     semantic();fingerprint();reserveDraft();break;
    case 'update_draft':
     lease();if(req.parentRevision!==rec.draft.revision||req.contentRevision<=req.parentRevision)throw Error('New parent-linked revision required');
     semantic();fingerprint();rec.revisions[rec.draft.revision]=structuredClone(rec.draft);reserveDraft();break;
    case 'final':
     lease();exact();semantic();if(!req.qcEvidenceRef||!req.auditEvidenceRef||!req.sourceEvidenceRef)throw Error('Final evidence required');
     rec.draft.decision='FINAL_PENDING_USER_DECISION';rec.draft.qcEvidenceRef=req.qcEvidenceRef;rec.draft.auditEvidenceRef=req.auditEvidenceRef;break;
    case 'approve':
     lease();exact();semantic();decision();
     if(req.userDecision.scope!=='APPROVE_REVISION'||rec.draft.decision!=='FINAL_PENDING_USER_DECISION')throw Error('Exact pending approval required');
     rec.draft.decision='APPROVED_LOCKED';rec.draft.reservation='RELEASED';rec.draft.outcome='APPROVED';
     rec.approved=structuredClone(rec.draft);rec.approvalEvent=eventId;rec.revisions[req.contentRevision]=structuredClone(rec.approved);rec.terminal='APPROVED_LOCKED';break;
    case 'reject_script':
     lease();exact();decision();if(req.userDecision.scope!=='REJECT_SCRIPT')throw Error('Script scope required');
     rec.draft.decision='CANDIDATE';break;
    case 'reject_opportunity':
     if(!rec)throw Error('Unknown content');decision();semantic();if(req.userDecision.scope!=='REJECT_OPPORTUNITY')throw Error('Opportunity scope required');
     if(req.contentRevision!==rec.approved?.revision&&req.contentRevision!==rec.draft?.revision)throw Error('Unknown revision');
     rec.terminal='REJECTED_LOCKED';if(rec.draft)rec.draft.reservation='RELEASED';break;
    case 'reopen':
     decision();if(!rec?.terminal||req.userDecision.scope!=='UNLOCK_REOPEN'||!req.userDecision.reason)throw Error('Explicit unlock scope/reason required');
     semantic();fingerprint();if(req.contentRevision<=Math.max(...Object.keys(rec.revisions).map(Number),rec.draft?.revision||0))throw Error('New revision required');
     rec.priorTerminal=rec.terminal;rec.terminal=null;rec.reuseAuthorization=eventId;reserveDraft();break;
    default:throw Error('Unknown op');
   }
   const next=expectedRevision+1;
   const body={request:JSON.stringify(req),at:now,op,contentId,runId};
   this.db.prepare('UPDATE projects SET revision=?,state=? WHERE id=? AND revision=?').run(next,JSON.stringify(state),project,expectedRevision);
   this.db.prepare('INSERT INTO events VALUES(?,?,?,?)').run(project,eventId,next,JSON.stringify(body));
   this.db.exec('COMMIT');
   const verified=this.snapshot(project);
   // Shared concurrent writer may advance revision after commit; event readback binds exact committed revision.
   const saved=this.db.prepare('SELECT * FROM events WHERE project=? AND event_id=?').get(project,eventId);
   if(!saved||saved.revision!==next)throw Error('Durable readback failed');
   return {...verified,committedRevision:next,eventId,readback:true};
  }catch(e){try{this.db.exec('ROLLBACK');}catch{}throw e;}
 }
 close(){this.db.close();}
}
