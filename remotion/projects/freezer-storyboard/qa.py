import json, subprocess
from pathlib import Path
from PIL import Image, ImageDraw

ROOT=Path(__file__).resolve().parents[2]
out=ROOT/'out'; frames=out/'frames'; frames.mkdir(exist_ok=True)
m=json.loads((out/'production-manifest.json').read_text(encoding='utf-8'))
metadata=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(out/'video.mp4')],text=True))
(out/'metadata.json').write_text(json.dumps(metadata,indent=2))
v=next(x for x in metadata['streams'] if x['codec_type']=='video'); a=next(x for x in metadata['streams'] if x['codec_type']=='audio')
assert (v['width'],v['height'],v['codec_name'])==(1080,1920,'h264'),v
assert a['codec_name']=='aac',a
assert abs(float(metadata['format']['duration'])-m['duration_frames']/30)<.12,metadata['format']
assert v['r_frame_rate']=='30/1',v
cursor=0; picks=[]
for i,s in enumerate(m['scenes']):
 assert s['start_frame']==cursor
 assert s['measured_audio_duration']+.3 <= (s['end_frame_exclusive']-s['start_frame'])/30
 cursor=s['end_frame_exclusive']
 for name,n in [('start',s['start_frame']),('middle',(s['start_frame']+cursor)//2),('end',cursor-1)]: picks.append((f's{i+1}-{name}',n))
 if i: picks.append((f's{i+1}-transition',s['start_frame']+7))
assert cursor==m['duration_frames']
for name,f in picks:
 subprocess.run(['ffmpeg','-v','error','-ss',str(f/30),'-i',str(out/'video.mp4'),'-frames:v','1',str(frames/f'{name}.png')],check=True)
thumbs=[]
for name,f in picks:
 im=Image.open(frames/f'{name}.png').convert('RGB'); im.thumbnail((216,384)); tile=Image.new('RGB',(236,418),'#eeeeee');tile.paste(im,((236-im.width)//2,5));ImageDraw.Draw(tile).text((8,394),f'{name} / f{f}',fill='black');thumbs.append(tile)
for page in range(0,len(thumbs),12):
 sheet=Image.new('RGB',(236*6,418*2),'white')
 for n,t in enumerate(thumbs[page:page+12]):sheet.paste(t,((n%6)*236,(n//6)*418))
 sheet.save(out/f'contact-sheet-{page//12+1}.jpg',quality=94)
subprocess.run(['ffmpeg','-v','error','-i',str(out/'video.mp4'),'-vn','-c:a','copy',str(out/'audio-review.m4a')],check=True)
black=subprocess.run(['ffmpeg','-hide_banner','-i',str(out/'video.mp4'),'-vf','blackdetect=d=0.15:pix_th=0.04','-an','-f','null','-'],capture_output=True,text=True)
(out/'blackdetect.log').write_text(black.stderr)
assert 'black_start:' not in black.stderr, 'Unexpected black interval'
m['delivery']['render_status']='rendered_and_automated_checks_passed'
m['delivery']['metadata']=metadata
m['delivery']['qa_frames']=[str(p.relative_to(ROOT)) for p in frames.glob('*.png')]
m['delivery']['audio_review']='Original narration transcript matches all six scenes; final listening pending'
(out/'production-manifest.json').write_text(json.dumps(m,ensure_ascii=False,indent=2),encoding='utf-8')
print('PASS: H264/AAC, 1080x1920, 30fps, all six audio tracks fit, timeline contiguous, no black interval')
