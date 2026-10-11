import json, re, subprocess, unicodedata
from pathlib import Path
import hashlib
from fontTools.ttLib import TTFont
P=Path('public/medicine')
OUT=Path('out/medicine'); OUT.mkdir(parents=True,exist_ok=True)
script=(P/'approved-script.txt').read_text(encoding='utf-8').strip()
metadata=json.loads((P/'production.json').read_text(encoding='utf-8-sig'))
assert hashlib.sha256((P/'narration.mp3').read_bytes()).hexdigest()==metadata['narration_sha256']
font=TTFont(P/'NotoSans-VF.ttf')
cmap=font.getBestCmap()
extra="Tiếng Việt: Ă Â Đ Ê Ô Ơ Ư ă â đ ê ô ơ ư; Nguyễn, bảo quản, tủ lạnh, sức khỏe; ắ ằ ẳ ẵ ặ ấ ầ ẩ ẫ ậ ế ề ể ễ ệ ố ồ ổ ỗ ộ ớ ờ ở ỡ ợ ứ ừ ử ữ ự"
texts=script+extra+"CÙNG HOẠT CHẤT KHÁC TÊN Kiểm tra thành phần Hỏi dược sĩ Đến cơ sở y tế ngay Đừng chờ triệu chứng Nguồn FDA NHS Minh họa AI paracetamol acetaminophen"
texts+=Path('src/medicine/MedicineSafetyV2.tsx').read_text(encoding='utf-8-sig')
missing=sorted(set(c for form in ['NFC','NFD'] for c in unicodedata.normalize(form,texts) if not c.isspace() and ord(c) not in cmap))
assert not missing,missing
duration=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',str(P/'narration.mp3')]))
existing=Path('src/medicine/alignment.json')
if existing.exists():
    data=json.loads(existing.read_text(encoding='utf-8'))
    (OUT/'alignment.json').write_text(json.dumps(data,ensure_ascii=False),encoding='utf-8')
else:
    import stable_whisper
    model=stable_whisper.load_model('small',device='cpu')
    result=model.align(str(P/'narration.mp3'),script,language='vi',original_split=True)
    assert result is not None
    result.save_as_json(str(OUT/'alignment.json'))
    data=result.to_dict()
words=[w for seg in data['segments'] for w in seg['words']]
assert words and all(w['end']>=w['start'] for w in words)
assert ''.join(w['word'] for w in words).split()==script.split(),('Script mismatch',words)
captions=[dict(text=w['word'],startMs=round(w['start']*1000),endMs=round(w['end']*1000),timestampMs=round((w['start']+w['end'])*500),confidence=None) for w in words]
# Balance caption pages within each sentence; never leave an orphan word from a long sentence.
sentences=[]; sentence=[]
for w in captions:
    sentence.append(w)
    if re.search(r'[.!?;]$',w['text'].strip()):
        sentences.append(sentence);sentence=[]
if sentence:sentences.append(sentence)
pages=[]
import math
for sentence in sentences:
    remaining=sentence[:]
    count=math.ceil(len(''.join(w['text'] for w in remaining).strip())/43)
    while remaining:
        target=len(''.join(w['text'] for w in remaining).strip())/count
        candidates=[i for i in range(1,len(remaining)+1) if len(''.join(w['text'] for w in remaining[:i]).strip())<=43]
        if count==1:
            take=len(remaining)
        else:
            take=min(candidates,key=lambda i:abs(len(''.join(w['text'] for w in remaining[:i]).strip())-target))
        pages.append(remaining[:take]);remaining=remaining[take:];count-=1


starts=[]
for phrase in ['Đang uống','Một số thuốc','Trên nhãn','Hai hộp','Quá liều','Ban đầu','Nếu cả hai','Nếu nghi','Đừng chờ']:
    index=script.index(phrase)
    prefix=script[:index].split()
    # Whisper whitespace words can combine syllables; locate via concatenated normalized character offsets.
    chars=0
    target=len(''.join(script[:index].split()))
    for w in words:
        n=len(''.join(w['word'].split()))
        if chars+n>target:
            starts.append(round(w['start']*30));break
        chars+=n
timing=dict(durationInFrames=round(duration*30)+24,duration=duration,sceneStarts=starts,captions=captions,pages=[dict(startMs=p[0]['startMs'],endMs=p[-1]['endMs'],words=p) for p in pages])
Path('src/medicine').mkdir(parents=True,exist_ok=True)
Path('src/medicine/timing.json').write_text(json.dumps(timing,ensure_ascii=False,indent=2),encoding='utf-8')
(OUT/'preflight.json').write_text(json.dumps(dict(font='Noto Sans VF OFL',NFC_NFD_glyphs='PASS',script_integrity='PASS',duration=duration,alignment='stable-ts small real audio',words=len(words)),ensure_ascii=False,indent=2))
print(json.dumps(dict(duration=duration,starts=starts,pages=len(pages))))






