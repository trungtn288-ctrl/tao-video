import json, math, subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PROJECT = Path(__file__).resolve().parent
manifest = json.loads((PROJECT / 'production-manifest.json').read_text(encoding='utf-8'))
transcripts = json.loads((PROJECT / 'transcription.json').read_text(encoding='utf-8'))
cursor = 0
for i, (scene, transcript) in enumerate(zip(manifest['scenes'], transcripts)):
    audio = ROOT / 'public' / 'freezer' / f'scene-{i+1:02}.mp3'
    duration = float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',str(audio)], text=True).strip())
    scene['measured_audio_duration'] = duration
    scene['audio_duration_evidence'] = 'ffprobe on downloaded original MP3'
    scene['start_frame'] = cursor
    length = max(scene['original_end_frame_exclusive'] - scene['original_start_frame'], math.ceil((duration + .35) * 30))
    cursor += length
    scene['end_frame_exclusive'] = cursor
    assert transcript['text'] == scene['approved_narration'], (i, transcript['text'])
    words = transcript['words']
    cues = []
    for start in range(0, len(words), 7):
        group = words[start:start+7]
        cues.append({'text': ' '.join(w['text'] for w in group), 'startMs': round(group[0]['start']*1000), 'endMs': round(group[-1]['end']*1000), 'timestampMs': None, 'confidence': None})
    scene['subtitle_cues'] = cues
    scene['audio_path'] = f'freezer/scene-{i+1:02}.mp3'
    scene['asset_path'] = f'freezer/scene-{i+1:02}.' + ('mp4' if i==0 else 'png')
manifest['duration_frames'] = cursor
source = json.loads(subprocess.check_output(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(ROOT/'public/freezer/scene-01.mp4')], text=True))
video = next(s for s in source['streams'] if s['codec_type']=='video')
manifest['scenes'][0]['native_resolution'] = [video['width'],video['height']]
manifest['scenes'][0]['source_duration'] = float(source['format']['duration'])
assert manifest['scenes'][0]['source_duration'] >= manifest['scenes'][0]['end_frame_exclusive']/30
(ROOT/'src/freezer/timing.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
(ROOT/'out').mkdir(exist_ok=True)
(ROOT/'out/production-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
print(f'Validated six scenes, {cursor} frames, {cursor/30:.3f}s')
