import React, {useEffect, useState} from 'react';
import {AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, delayRender, continueRender, cancelRender} from 'remotion';
import {Audio} from '@remotion/media';
import timing from './timing.json';

const C={navy:'#071B2A',cream:'#F4F1E9',ink:'#163F3B',white:'#F9FAF7',cyan:'#55D7DD',amber:'#F4BD70',muted:'#ABC0CA',red:'#F18C76'};
const titles=['Thuốc cảm +\nthuốc hạ sốt?','Đọc thành phần\ntrước khi uống','Hai cách gọi\ncùng một thuốc','Khác tên hộp.\nCùng hoạt chất.','Quá liều có thể\nlàm tổn thương gan','Thấy khỏe\nchưa đủ yên tâm','Đừng tự uống thêm.\nHỏi dược sĩ.','Nghi quá liều?\nĐi khám ngay.','Đừng chờ\ncó triệu chứng.'];
const labels=['KIỂM TRA TRƯỚC KHI UỐNG','THÀNH PHẦN TRÊN NHÃN','NHẬN DIỆN HOẠT CHẤT','NGUY CƠ CỘNG DỒN','HẬU QUẢ CÓ THỂ NGHIÊM TRỌNG','TRIỆU CHỨNG CÓ THỂ ĐẾN MUỘN','HÀNH ĐỘNG TIẾP THEO','CẦN XỬ TRÍ NGAY','GHI NHỚ'];
const box:React.CSSProperties={background:C.cream,color:C.ink,borderRadius:28,padding:30,boxShadow:'0 16px 50px #0003'};
const Badge:React.FC<{children:React.ReactNode;color?:string}>=({children,color=C.cyan})=><div style={{fontSize:27,fontWeight:700,letterSpacing:2,color}}>{children}</div>;

export const MedicineSafetyV2:React.FC=()=>{
 const frame=useCurrentFrame();const {fps,durationInFrames}=useVideoConfig();
 const [handle]=useState(()=>delayRender('Load licensed Noto Sans variable font'));
 useEffect(()=>{const font=new FontFace('MedicineNoto','url('+staticFile('medicine/NotoSans-VF.ttf')+')',{weight:'100 900',style:'normal'});font.load().then(async f=>{document.fonts.add(f);await document.fonts.ready;continueRender(handle)}).catch(cancelRender)},[handle]);
 const ms=frame/fps*1000;
 const scene=Math.max(0,timing.sceneStarts.reduce((last,s,i)=>frame>=s?i:last,0));
 const local=frame-timing.sceneStarts[scene];
 const reveal=(at:number)=>interpolate(local,[at,at+8],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 const photoScene=[0,1,5,6,7,8].indexOf(scene)>=0;
 const photo=scene===6?'pharmacist.png':'compare.png';
 const page=timing.pages.find((p,i)=>ms>=p.startMs && ms<(timing.pages[i+1]?.startMs??p.endMs+700));
 return <AbsoluteFill style={{background:C.navy,color:C.white,fontFamily:'MedicineNoto',overflow:'hidden'}}>
  <Audio src={staticFile('medicine/narration.mp3')}/>
  <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 35% 42%, #163F3B 0%, #071B2A 72%)'}}/>
  <div style={{position:'absolute',left:72,top:235,width:818,height:5,background:'#ffffff20',borderRadius:9}}><div style={{width:(frame/durationInFrames*100)+'%',height:5,background:C.cyan,borderRadius:9}}/></div>
  <div style={{position:'absolute',left:72,top:260,fontSize:25,fontWeight:700,color:C.muted,letterSpacing:3}}>DAILY SỨC KHỎE</div>
  <div style={{position:'absolute',left:72,top:320,width:924,height:1100,transform:'scale(.82)',transformOrigin:'top left',opacity:scene===0?1:reveal(0)}}>
   <Badge color={scene===4||scene>=7?C.amber:C.cyan}>{labels[scene]}</Badge>
   <div style={{fontSize:67,lineHeight:1.12,fontWeight:800,whiteSpace:'pre-line',marginTop:18,marginBottom:28}}>{titles[scene]}</div>
   {photoScene && <div style={{height:scene===1?510:630,width:924,borderRadius:32,overflow:'hidden',position:'relative'}}>
    <Img src={staticFile('medicine/'+photo)} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:scene===6?'center 50%':'center 58%',transform:scene===1?'scale(1.07)':'none'}}/>
    <div style={{position:'absolute',bottom:14,left:18,fontSize:22,color:C.white,background:'#071B2AC9',borderRadius:8,padding:'8px 12px'}}>Minh họa AI · Bao bì không thương hiệu</div>
   </div>}
   {scene===0&&<div style={{...box,marginTop:24,opacity:reveal(65),fontSize:40,fontWeight:700}}>Kiểm tra thành phần trước.</div>}
   {scene===1&&<div style={{...box,marginTop:25,fontSize:32,opacity:reveal(20)}}><div style={{fontSize:23,letterSpacing:2,marginBottom:8}}>VÍ DỤ THÀNH PHẦN CẦN TÌM</div><strong style={{fontSize:48}}>paracetamol</strong><div style={{marginTop:9}}>Một số thuốc cảm đã có.</div></div>}
   {scene===2&&<div style={{...box,marginTop:70,textAlign:'center',padding:'60px 30px'}}><div style={{fontSize:61,fontWeight:800}}>paracetamol</div><div style={{fontSize:72,color:C.ink,opacity:reveal(12),margin:'28px 0'}}>＝</div><div style={{fontSize:57,fontWeight:800,opacity:reveal(20)}}>acetaminophen</div><div style={{marginTop:55,fontSize:32,opacity:reveal(45)}}>Hai tên gọi · cùng hoạt chất</div></div>}
   {scene===3&&<div style={{marginTop:50}}><div style={{display:'flex',gap:24}}>
    <div style={{...box,flex:1,borderTop:'12px solid '+C.cyan}}><div style={{fontSize:26}}>NHÃN A · MINH HỌA</div><strong style={{fontSize:34}}>paracetamol</strong></div>
    <div style={{...box,flex:1,borderTop:'12px solid '+C.amber,opacity:reveal(15)}}><div style={{fontSize:26}}>NHÃN B · MINH HỌA</div><strong style={{fontSize:34}}>paracetamol</strong></div></div>
    <div style={{fontSize:85,textAlign:'center',color:C.cyan,opacity:reveal(28),margin:'30px 0'}}>↓　↓</div>
    <div style={{...box,textAlign:'center',fontSize:48,fontWeight:800,opacity:reveal(38)}}>Cộng dồn cùng hoạt chất</div>
    <div style={{fontSize:29,color:C.muted,marginTop:38}}>Sơ đồ khái niệm · không biểu diễn liều cụ thể</div>
   </div>}
   {scene===4&&<div style={{marginTop:55}}><div style={{borderLeft:'8px solid '+C.amber,padding:'25px 35px',background:'#17332F',borderRadius:24,fontSize:44}}>Quá liều</div><div style={{color:C.amber,fontSize:80,marginLeft:45,opacity:reveal(16)}}>↓</div><div style={{...box,fontSize:48,fontWeight:800,opacity:reveal(25)}}>Có thể tổn thương gan</div><div style={{marginTop:36,padding:35,borderRadius:25,background:C.red,color:C.navy,fontSize:48,fontWeight:800,opacity:reveal(58)}}>Thậm chí suy gan</div></div>}
   {scene===5&&<div style={{...box,marginTop:24,fontSize:38,fontWeight:700,opacity:reveal(15)}}>Ban đầu vẫn có thể thấy khỏe.</div>}
   {scene===6&&<div style={{...box,marginTop:24,fontSize:36,fontWeight:700,opacity:reveal(40)}}>Dùng đúng hướng dẫn.</div>}
   {scene===7&&<div style={{...box,marginTop:24,fontSize:36,fontWeight:700,opacity:reveal(20)}}>Mang theo các vỏ thuốc.</div>}
   {scene===8&&<div style={{...box,marginTop:24,fontSize:39,fontWeight:800,color:C.ink}}>Đến cơ sở y tế ngay.</div>}
   <div style={{position:'absolute',left:0,top:1043,fontSize:26,color:C.muted}}>Nguồn: FDA · NHS | Liên kết đầy đủ trong mô tả</div>
  </div>
  {page&&<div data-caption style={{position:'absolute',left:72,top:1240,width:818,boxSizing:'border-box',padding:'20px 24px',fontSize:42,lineHeight:1.38,fontWeight:600,borderRadius:24,background:'#12312FF0',color:C.white}}>
   {page.words.map((w,i)=><span key={i} style={{color:ms>=w.startMs&&ms<w.endMs?C.amber:C.white,whiteSpace:'pre-wrap'}}>{w.text}</span>)}
  </div>}
 </AbsoluteFill>
};



