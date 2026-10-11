import json, re, subprocess, unicodedata
from pathlib import Path
import stable_whisper
from fontTools.ttLib import TTFont
P=Path('public/medicine')
OUT=Path('out/medicine'); OUT.mkdir(parents=True,exist_ok=True)
script=(P/'approved-script.txt').read_text(encoding='utf-8').strip()
font=TTFont(P/'NotoSans-VF.ttf')
cmap=font.getBestCmap()
extra="Tiếng Việt: Ă Â Đ Ê Ô Ơ Ư ă â đ ê ô ơ ư; Nguyễn, bảo quản, tủ lạnh, sức khỏe; ắ ằ ẳ ẵ ặ ấ ầ ẩ ẫ ậ ế ề ể ễ ệ ố ồ ổ ỗ ộ ớ ờ ở ỡ ợ ứ ừ ử ữ ự"
texts=script+extra+"CÙNG HOẠT CHẤT KHÁC TÊN Kiểm tra thành phần Hỏi dược sĩ Đến cơ sở y tế ngay Đừng chờ triệu chứng Nguồn FDA NHS Minh họa AI paracetamol acetaminophen"
missing=sorted(set(c for form in ['NFC','NFD'] for c in unicodedata.normalize(form,texts) if not c.isspace() and ord(c) not in cmap))
assert not missing,missing
duration=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',str(P/'narration.mp3')]))
model=stable_whisper.load_model('small',device='cpu')
result=model.align(str(P/'narration.mp3'),script,language='vi',original_split=True)
assert result is not None
result.save_as_json(str(OUT/'alignment.json'))
data=result.to_dict()
words=[w for seg in data['segments'] for w in seg['words']]
assert words and all(w['end']>=w['start'] for w in words)
assert ''.join(w['word'] for w in words).split()==script.split(),('Script mismatch',words)
captions=[dict(text=w['word'],startMs=round(w['start']*1000),endMs=round(w['end']*1000),timestampMs=round((w['start']+w['end'])*500),confidence=None) for w in words]
# Word-level alignments are kept intact; layout pages hold at most 43 characters.
pages=[]; group=[]
for w in captions:
    candidate=group+[w]
    if group and len(''.join(x['text'] for x in candidate).strip())>43:
        pages.append(group); group=[]
    group.append(w)
    if re.search(r'[.!?;]$',w['text'].strip()):
        pages.append(group);group=[]
if group:pages.append(group)
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
Path('src/medicine/timing.json').write_text(json.dumps(timing,ensure_ascii=False,indent=2),encoding='utf-8')
(OUT/'preflight.json').write_text(json.dumps(dict(font='Noto Sans VF OFL',NFC_NFD_glyphs='PASS',script_integrity='PASS',duration=duration,alignment='stable-ts small real audio',words=len(words)),ensure_ascii=False,indent=2))
print(json.dumps(dict(duration=duration,starts=starts,pages=len(pages))))

