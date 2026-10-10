
import http from 'node:http';
import {timingSafeEqual} from 'node:crypto';
import {Registry} from './registry.mjs';
const token=process.env.REGISTRY_TOKEN;
if(!token||token.length<32)throw Error('Set REGISTRY_TOKEN >=32 chars; never log it');
const dbfile=process.env.REGISTRY_DB;
if(!dbfile)throw Error('REGISTRY_DB must point to persistent volume, not scratch');
const lease=Number(process.env.REGISTRY_LEASE_SECONDS);
const registry=new Registry(dbfile,lease);
function auth(req){
 const a=Buffer.from(req.headers.authorization||''),b=Buffer.from('Bearer '+token);
 return a.length===b.length&&timingSafeEqual(a,b);
}
const server=http.createServer(async(req,res)=>{
 const reply=(status,data)=>{res.writeHead(status,{'content-type':'application/json'});res.end(JSON.stringify(data));};
 if(!auth(req))return reply(401,{error:'Unauthorized'});
 try{
  const url=new URL(req.url,'http://localhost');
  if(req.method==='GET'&&url.pathname==='/snapshot'){
   const s=registry.snapshot(url.searchParams.get('project'));
   return reply(s?200:404,s||{error:'Not initialized'});
  }
  if(req.method!=='POST'||!['/initialize','/transaction'].includes(url.pathname))return reply(404,{error:'Not found'});
  let body='';for await(const chunk of req){body+=chunk;if(Buffer.byteLength(body)>1048576)return reply(413,{error:'Payload too large'});}
  const input=JSON.parse(body);
  return reply(200,url.pathname==='/initialize'?registry.init(input.project,input.eventId):registry.transact(input));
 }catch(e){reply(e.message.startsWith('CAS_CONFLICT')?409:422,{error:e.message});}
});
server.listen(Number(process.env.PORT||8080),process.env.HOST||'127.0.0.1');
process.on('SIGTERM',()=>server.close(()=>{registry.close();process.exit(0);}));
