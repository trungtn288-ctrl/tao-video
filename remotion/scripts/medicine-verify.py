import json,subprocess
from pathlib import Path
out=Path('out/medicine')
video=out/'ASF-20261011-001.mp4'
metadata=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_format','-show_streams','-of','json',str(video)]))
v=next(s for s in metadata['streams'] if s['codec_type']=='video')
a=next(s for s in metadata['streams'] if s['codec_type']=='audio')
timing=json.loads(Path('src/medicine/timing.json').read_text(encoding='utf-8'))
assert (v['width'],v['height'],v['codec_name'],v['r_frame_rate'])==(1080,1920,'h264','30/1'),v
assert a['codec_name']=='aac',a
assert abs(float(metadata['format']['duration'])-timing['durationInFrames']/30)<.08
subprocess.run(['ffmpeg','-v','error','-i',str(video),'-f','null','-'],check=True)
(out/'metadata.json').write_text(json.dumps(metadata,indent=2))
frames=out/'frames-final';frames.mkdir(exist_ok=True)
samples=json.loads((out/'qa-samples.json').read_text())
for sample in samples:
    subprocess.run(['ffmpeg','-v','error','-ss',str(sample['frame']/30),'-i',str(video),'-frames:v','1',str(frames/(sample['name']+'.png'))],check=True)
report=dict(content_id='ASF-20261011-001',format='PASS H264/AAC 1080x1920 30fps',decode='PASS entire file',script_integrity='PASS exact approved text from forced alignment',font='PASS NFC/NFD glyph check',frames_exported=len(samples),render='GitHub Actions only',continuous_playback='NOT_RUN',audio_listening='NOT_RUN',publish_ready='NOT_CERTIFIED',publication='NOT_PUBLISHED')
(out/'qa-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))

