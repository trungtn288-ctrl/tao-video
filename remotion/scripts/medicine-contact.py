from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
import json
out=Path('out/medicine')
paths=sorted((out/'frames').glob('*.png'))
sheet=Image.new('RGB',(270*4,480*((len(paths)+3)//4)),'#071B2A')
for i,p in enumerate(paths):
    im=Image.open(p).convert('RGB');im.thumbnail((270,480))
    x=(i%4)*270;y=(i//4)*480;sheet.paste(im,(x,y));ImageDraw.Draw(sheet).text((x+8,y+8),p.stem,fill='white')
sheet.save(out/'contact-sheet.jpg',quality=94)
# Simulated platform mask on an actual rendered frame; not part of final video.
im=Image.open(paths[0]).convert('RGBA')
overlay=Image.new('RGBA',im.size,(0,0,0,0));d=ImageDraw.Draw(overlay)
for bounds in [(0,0,1080,225),(0,1490,1080,1920),(920,820,1080,1920)]:d.rectangle(bounds,fill=(180,30,30,150))
Image.alpha_composite(im,overlay).convert('RGB').save(out/'safe-zone-check.jpg',quality=95)

