
import {Registry} from './registry.mjs';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
export async function run(){
 const dir=mkdtempSync(join(tmpdir(),'registry-v246-')),file=join(dir,'test.db');
 const a=new Registry(file,1),b=new Registry(file,1);let count=0;
 try{
  assert.equal(a.init('p','init').revision,0);count++;
  const semantic=(rev,ids=[])=>({checkedRevision:rev,result:'PASS',evidenceRef:'semantic-reviewed-test',comparedBlockingIds:ids});
  const base={project:'p',contentId:'A',runId:'R',contentRevision:1};
  const req={...base,expectedRevision:0,eventId:'reserve-A',op:'reserve',semantic:semantic(0),fingerprint:{event:'A',angle:'verified context'},fingerprintEvidenceRef:'fp1',contentSnapshotRef:'snapshot1'};
  assert.equal(a.transact(req).committedRevision,1);count++;
  assert.throws(()=>b.transact({...req,contentId:'B',eventId:'race-B'}),/CAS_CONFLICT/);count++;
  assert.throws(()=>b.transact({...req,contentId:'B',eventId:'missing-coverage',expectedRevision:1,semantic:semantic(1)}),/Incomplete semantic coverage/);count++;
  assert.equal(a.transact(req).idempotent,true);count++;
  assert.throws(()=>a.transact({...req,fingerprint:{event:'changed'}}),/different payload/);count++;
  a.transact({...base,op:'final',eventId:'final-A',expectedRevision:1,semantic:semantic(1),qcEvidenceRef:'qc',auditEvidenceRef:'audit',sourceEvidenceRef:'source'});
  a.transact({...base,op:'approve',eventId:'approve-A',expectedRevision:2,semantic:semantic(2),userDecision:{contentId:'A',contentRevision:1,text:'duyệt A revision1',scope:'APPROVE_REVISION'}});
  assert.equal(b.snapshot('p').state.records.A.terminal,'APPROVED_LOCKED');count++;
  a.transact({...base,contentRevision:2,op:'edit_approved',eventId:'edit-A',expectedRevision:3,semantic:semantic(3),fingerprint:{event:'A',angle:'updated context'},fingerprintEvidenceRef:'fp2',contentSnapshotRef:'snapshot2',userDecision:{contentId:'A',contentRevision:2,text:'sửa A tạo revision2',scope:'USER_EDIT_REQUEST'}});
  assert.equal(a.snapshot('p').state.records.A.approved.revision,1);count++;
  assert.throws(()=>a.transact({...base,contentRevision:2,op:'approve',eventId:'earlyapprove',expectedRevision:4,semantic:semantic(4),userDecision:{contentId:'A',contentRevision:2,text:'duyệt',scope:'APPROVE_REVISION'}}),/pending approval/);count++;
  a.transact({...base,contentRevision:2,op:'release',eventId:'reject-draft',expectedRevision:4,outcome:'USER_REJECTED_DRAFT',userDecision:{contentId:'A',contentRevision:2,text:'bỏ draft2',scope:'REJECT_DRAFT'}});
  assert.equal(a.snapshot('p').state.records.A.approved.revision,1);assert.equal(a.snapshot('p').state.records.A.terminal,'APPROVED_LOCKED');count++;
  a.transact({project:'p',contentId:'B',runId:'R2',contentRevision:1,op:'reserve',eventId:'reserve-B',expectedRevision:5,semantic:semantic(5,['A']),fingerprint:{event:'B'},fingerprintEvidenceRef:'fpB',contentSnapshotRef:'snapshotB'});
  await new Promise(r=>setTimeout(r,1100));
  assert.throws(()=>a.transact({project:'p',contentId:'B',runId:'R2',contentRevision:1,op:'renew',eventId:'expired-write',expectedRevision:6}),/Lease lost/);count++;
  a.transact({project:'p',contentId:'B',runId:'reconcile',contentRevision:1,op:'reconcile_expiry',eventId:'expiry-B',expectedRevision:6});
  assert.equal(a.snapshot('p').state.records.A.terminal,'APPROVED_LOCKED');count++;
  b.close();a.close();const c=new Registry(file,1);assert.equal(c.snapshot('p').revision,7);assert.equal(c.snapshot('p').state.records.A.approved.revision,1);c.close();count++;
  return {checks:count,status:'PASS',scope:'LOCAL_CORE_ONLY',notTested:['Cloud deployment','Chat connector','network TLS/auth endpoint','semantic evaluator correctness','multi-host database access']};
 }finally{try{a.close()}catch{}try{b.close()}catch{}rmSync(dir,{recursive:true,force:true});}
}
