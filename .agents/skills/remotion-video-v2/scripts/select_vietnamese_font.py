#!/usr/bin/env python3
"""Select an installed font covering Vietnamese text; no downloads or render QA."""
import argparse,json,subprocess,unicodedata
from pathlib import Path
try:
    from fontTools.ttLib import TTFont
except ImportError:
    print(json.dumps({'status':'DEPENDENCY_UNAVAILABLE','dependency':'fonttools','glyph_qa':'NOT_RUN','render_qa':'NOT_RUN'}))
    raise SystemExit(2)
SAMPLE='Tiếng Việt ĂÂĐÊÔƠƯ ăâđêôơư Nguyễn bảo quản tủ lạnh sức khỏe ắằẳẵặấầẩẫậếềểễệốồổỗộớờởỡợứừửữự'

def covers(path,text):
    try:
        with TTFont(path,fontNumber=0) as font:
            cmap=font.getBestCmap() or {}
            required=set(unicodedata.normalize('NFC',text)+unicodedata.normalize('NFD',text))
            missing=sorted(c for c in required if not c.isspace() and ord(c) not in cmap)
            name=font['name'].getDebugName(1)
        return name,missing
    except Exception as exc:return None,[str(exc)]

def main():
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('--text-file',type=Path);p.add_argument('--candidate',type=Path,action='append',default=[]);a=p.parse_args()
    text=SAMPLE+(a.text_file.read_text(encoding='utf-8') if a.text_file else '')
    candidates=[str(x) for x in a.candidate]
    if not candidates:
        bundled=Path(__file__).resolve().parents[1]/'assets/fonts/NotoSans-VF.ttf'
        if bundled.exists(): candidates.append(str(bundled))
    if not candidates:
        for family in ('Noto Sans','DejaVu Sans','Segoe UI'):
            try:
                r=subprocess.run(['fc-match','-f','%{file}',family],check=True,capture_output=True,text=True)
                if r.stdout and r.stdout not in candidates:candidates.append(r.stdout)
            except (OSError,subprocess.CalledProcessError):pass
    rejected=[]
    for path in candidates:
        name,missing=covers(path,text)
        if name and not missing:
            print(json.dumps({'status':'GLYPH_PREFLIGHT_PASS','family':name,'path':path,'render_qa':'NOT_RUN','weights_qa':'NOT_RUN'},ensure_ascii=False));return
        rejected.append({'path':path,'missing':missing})
    print(json.dumps({'status':'NO_COMPATIBLE_FONT','rejected':rejected},ensure_ascii=False));raise SystemExit(1)
if __name__=='__main__':main()
