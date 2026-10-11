#!/usr/bin/env python3
"""Compile a scene brief into a built-in imagegen prompt; never generate media."""
import argparse,json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]

def build(brief):
    if not isinstance(brief,dict): raise ValueError('Brief must be a JSON object')
    for field in ('subject','action','setting'):
        if not isinstance(brief.get(field),str) or not brief[field].strip():
            raise ValueError(f'Missing {field}')
    lines=[
        'Use case: '+brief.get('use_case','photorealistic-natural'),
        'Asset type: visual asset for a Vietnamese faceless vertical video',
        'Primary request: Show the exact subject, state and action for this narration: '+brief.get('narration','See approved scene brief'),
        'Subject: '+brief['subject'], 'Action/state: '+brief['action'], 'Scene/backdrop: '+brief['setting'],
        'Style/medium: premium natural editorial photography; lifelike, visually rich and inviting; natural imperfections',
        'Composition/framing: portrait 9:16; '+brief.get('camera','clear main subject and interaction, realistic perspective'),
        'Text space: '+brief.get('text_space','keep important subject clear of planned caption and UI overlay areas'),
        'Lighting/mood: '+brief.get('lighting','motivated soft natural light, natural colors and restrained contrast'),
        'Materials/textures: '+brief.get('materials','subject-appropriate detailed textures, realistic reflections and contact shadows'),
        'Continuity: '+brief.get('continuity','keep identity, clothing, objects and setting consistent with approved adjacent scenes'),
        'Text: no baked-in subtitles, titles, numbers, source text, fake labels or logos',
        'Authenticity: generated illustration, not documentary evidence; no invented factual claim',
        'Constraints: correct anatomy, scale, perspective and physical contact; preserve approved meaning; a still does not prove real motion',
        'Avoid: extra or fused fingers/limbs, wrong species, floating objects, penetrating hands, distorted machines, plasticky food or skin, crude flat icons as hero, invented branding, watermark, blurry crop']
    if brief.get('named_subject'):
        if not brief.get('identity_constraints') or not brief.get('verified_references'):
            raise ValueError('Named subject requires identity_constraints and verified_references')
        lines.extend(['Named identity: '+str(brief['named_subject']), 'Identity constraints: '+str(brief['identity_constraints']), 'Verified references (provide images through actual tool schema): '+str(brief['verified_references']), 'Preserve named identity; do not substitute a generic lookalike; label as illustration, not documentary evidence'])
    return '\n'.join(lines)+'\n'

def main():
    p=argparse.ArgumentParser(description=__doc__);g=p.add_mutually_exclusive_group(required=True)
    g.add_argument('--input',type=Path);g.add_argument('--reference',type=int,choices=range(1,27));p.add_argument('--output',type=Path);a=p.parse_args()
    try:
        if a.reference:
            catalog=json.loads((ROOT/'references/image-prompts-26.json').read_text(encoding='utf-8'));item=catalog['items'][a.reference-1]
            prompt=(ROOT/'references/original-image-common.txt').read_text(encoding='utf-8').strip()+f' Exact large header text: "{item["number"]:02d} · {item["title"]}". Scene: '+item['scene']
        else: prompt=build(json.loads(a.input.read_text(encoding='utf-8')))
        if a.output: a.output.write_text(prompt,encoding='utf-8')
        else: print(prompt)
    except (ValueError,OSError) as e: p.exit(2,f'{e}\n')
if __name__=='__main__':main()
