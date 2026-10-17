import React, {useEffect, useState} from 'react';
import {AbsoluteFill, Img, OffthreadVideo, Audio, Sequence, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring, delayRender, continueRender, cancelRender} from 'remotion';
import timing from './timing.json';

const titles = ['ĐỪNG CẤT THỊT VÀO\nNGĂN ĐÁ KIỂU NÀY!', 'Sai lầm:\nDùng túi nilon mỏng!', 'Mẹo 1: Quấn kín bằng\nmàng bọc thực phẩm', 'Mẹo 2: Trữ đông trong\nhộp kín / túi zip', 'Thịt tươi ngon\nnhư mới mua!', ''];
const tags = ['01 / CHÁY LẠNH', '02 / SAI LẦM', '03 / MÀNG BỌC', '04 / TRỮ ĐÔNG', '05 / THÀNH QUẢ', '06 / MẸO MỖI NGÀY'];

export const FreezerScene: React.FC<{index:number}> = ({index}) => {
 const f=useCurrentFrame(); const {fps}=useVideoConfig(); const s=timing.scenes[index];
 const duration=s.end_frame_exclusive-s.start_frame;
 const cue=s.subtitle_cues.find(c=>f/fps*1000>=c.startMs && f/fps*1000<c.endMs+80);
 const zoom=index===4 ? interpolate(f,[0,duration],[1,1.075],{extrapolateRight:'clamp'}) : 1;
 const shake=index===0 && f<36 ? Math.sin(f*2.4)*3*(1-f/36) : 0;
 const entry=spring({frame:f,fps,config:{damping:16,stiffness:130}});
 return <AbsoluteFill style={{background:'#10181b',fontFamily:'FreezerNoto',color:'white',overflow:'hidden'}}>
  <AbsoluteFill style={{transform:`translateX(${shake}px) scale(${zoom})`,filter:index===1?'grayscale(0.28)':'none'}}>
   {index===0 ? <OffthreadVideo muted src={staticFile(s.asset_path)} style={{width:'100%',height:'100%',objectFit:'cover'}}/> : <Img src={staticFile(s.asset_path)} style={{width:'100%',height:'100%',objectFit:'cover'}}/>}
  </AbsoluteFill>
  <AbsoluteFill style={{background:'linear-gradient(180deg,rgba(0,0,0,.34),transparent 28%,transparent 47%,rgba(0,0,0,.78) 100%)'}}/>
  <div style={{position:'absolute',top:140,left:64,fontSize:24,fontWeight:700,letterSpacing:3,background:'#10262bbd',padding:'14px 20px',borderRadius:12}}>{tags[index]}</div>
  {titles[index] && <div style={{position:'absolute',left:64,right:160,top:1140,transform:index===0?`scale(${.92+.08*entry})`:'none',transformOrigin:'left center',fontSize:index===0?65:58,fontWeight:900,lineHeight:1.19,whiteSpace:'pre-line',textShadow:'0 4px 24px #000',color:index===0?'#ffdc72':'white',borderLeft:index===0?'8px solid #ffdc72':'6px solid #9be1ca',paddingLeft:24}}>{titles[index]}</div>}
  {index===2 && <div style={{position:'absolute',left:68,right:170,bottom:305,height:8,background:'#ffffff35',borderRadius:4}}><div style={{width:`${f/duration*100}%`,height:8,background:'#9be1ca',borderRadius:4}}/></div>}
  {cue && <div style={{position:'absolute',left:70,right:165,bottom:330,textAlign:'center',fontSize:39,fontWeight:650,lineHeight:1.32,background:'#081014df',padding:'16px 23px',borderRadius:16,textShadow:'0 2px 3px #000'}}>{cue.text}</div>}
  {index===5 && <div style={{position:'absolute',left:68,right:180,top:1160,transform:`translateY(${(1-entry)*40}px)`,opacity:entry}}><div style={{display:'flex',alignItems:'center',gap:25}}><div style={{height:94,width:94,borderRadius:'50%',background:'#f4e8ce',border:'5px solid white',display:'flex',alignItems:'center',justifyContent:'center',color:'#29453b',fontSize:36,fontWeight:900}}>+</div><div style={{fontSize:62,fontWeight:900,background:'#e84e46',padding:'18px 45px',borderRadius:22}}>Follow</div></div><svg width="140" height="130" viewBox="0 0 140 130" style={{marginLeft:35,marginTop:10}}><path d="M120 110 Q40 115 15 15 M12 48 L15 15 L47 22" fill="none" stroke="#ffdc72" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/></svg></div>}
  {index===3 && f<14 && <AbsoluteFill style={{background:'#e7f5ed',transform:`translateX(${interpolate(f,[0,13],[0,110])}%)`}}/>}
 </AbsoluteFill>;
};

export const FreezerStoryboard: React.FC = () => {
 const {fps}=useVideoConfig(); const [handle]=useState(()=>delayRender('Load Vietnamese font'));
 useEffect(()=>{const font=new FontFace('FreezerNoto',`url(${staticFile('medicine/NotoSans-VF.ttf')})`,{weight:'100 900'});font.load().then(async loaded=>{document.fonts.add(loaded);await document.fonts.ready;continueRender(handle)}).catch(cancelRender)},[handle]);
 return <AbsoluteFill>
  <Sequence from={timing.scenes[0].start_frame} durationInFrames={timing.scenes[0].end_frame_exclusive-timing.scenes[0].start_frame} premountFor={fps}><FreezerScene index={0}/><Audio src={staticFile('freezer/scene-01.mp3')}/></Sequence>
  <Sequence from={timing.scenes[1].start_frame} durationInFrames={timing.scenes[1].end_frame_exclusive-timing.scenes[1].start_frame} premountFor={fps}><FreezerScene index={1}/><Audio src={staticFile('freezer/scene-02.mp3')}/></Sequence>
  <Sequence from={timing.scenes[2].start_frame} durationInFrames={timing.scenes[2].end_frame_exclusive-timing.scenes[2].start_frame} premountFor={fps}><FreezerScene index={2}/><Audio src={staticFile('freezer/scene-03.mp3')}/></Sequence>
  <Sequence from={timing.scenes[3].start_frame} durationInFrames={timing.scenes[3].end_frame_exclusive-timing.scenes[3].start_frame} premountFor={fps}><FreezerScene index={3}/><Audio src={staticFile('freezer/scene-04.mp3')}/></Sequence>
  <Sequence from={timing.scenes[4].start_frame} durationInFrames={timing.scenes[4].end_frame_exclusive-timing.scenes[4].start_frame} premountFor={fps}><FreezerScene index={4}/><Audio src={staticFile('freezer/scene-05.mp3')}/></Sequence>
  <Sequence from={timing.scenes[5].start_frame} durationInFrames={timing.scenes[5].end_frame_exclusive-timing.scenes[5].start_frame} premountFor={fps}><FreezerScene index={5}/><Audio src={staticFile('freezer/scene-06.mp3')}/></Sequence>
 </AbsoluteFill>;
};
