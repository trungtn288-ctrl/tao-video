import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const cliRequire=createRequire(require.resolve('@remotion/cli'));
const {bundle}=cliRequire('@remotion/bundler');
const {selectComposition,renderStill}=cliRequire('@remotion/renderer');
import fs from 'node:fs';
import path from 'node:path';
const out='out/medicine';fs.mkdirSync(out+'/frames',{recursive:true});
const timing=JSON.parse(fs.readFileSync('src/medicine/timing.json','utf8'));
const serveUrl=await bundle({entryPoint:path.resolve('src/index.ts')});
const composition=await selectComposition({serveUrl,id:'MedicineSafetyV2'});
const samples=timing.sceneStarts.map((s,i)=>({name:'scene-'+String(i+1).padStart(2,'0'),frame:Math.min(s+Math.min(45,Math.floor(((timing.sceneStarts[i+1]??timing.durationInFrames)-s)/2)),timing.durationInFrames-1)}));
timing.sceneStarts.forEach((start,i)=>samples.push({name:'complete-'+String(i+1).padStart(2,'0'),frame:Math.min(start+90,(timing.sceneStarts[i+1]??timing.durationInFrames)-10)}));
const longest=timing.pages.reduce((a,b)=>a.words.map(w=>w.text).join('').length>b.words.map(w=>w.text).join('').length?a:b);
samples.push({name:'longest-caption',frame:Math.round((longest.startMs+longest.endMs)/2000*30)});
for(let i=1;i<timing.sceneStarts.length;i++)samples.push({name:'transition-'+i,frame:timing.sceneStarts[i]+4});
for(const sample of samples){await renderStill({serveUrl,composition,output:out+'/frames/'+sample.name+'.png',frame:sample.frame,imageFormat:'png',logLevel:'warn'});console.log(sample)}
fs.writeFileSync(out+'/qa-samples.json',JSON.stringify(samples,null,2));



