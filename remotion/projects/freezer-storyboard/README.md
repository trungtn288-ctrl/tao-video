# Freezer storyboard production

Composition: `FreezerStoryboardV1`, 1080 x 1920, 30 fps, H.264/AAC.

The attached PDF is the content source. Narration remains verbatim at the user's explicit request. The user authorized longer scene durations to fit the actual speech and explicitly approved ElevenLabs V3 default speed because the connected tool cannot set speed 1.2. No audio speed changes are applied in editing.

Voice was selected once with a uniform random draw from the two verified Vietnamese voices: Clara Tran Vietnamese Standard and Tung Dang. Draw 0 selected Clara, `jlF8iBnNc6M1ZP5hRcRw`. Six original takes were generated with `eleven_v3`; six Scribe transcripts match the approved narration. Word timestamps drive captions. No paid retries or paid upscales were used.

Visuals: one ChatGPT-generated freezer anchor, one Google Flow Veo 3.1 Lite clip made with the anchor attached, and five ChatGPT stills. Each still references the previous scene's original image and the relevant earlier anchor. Full references are recorded in the manifest. Scene 1 video is native 720p and is scaled into the final 1080p output; still image dimensions are recorded separately. Flow video is muted in the final edit.

`prepare.py` measures downloaded speech files with ffprobe on the GitHub runner, increases scene durations only when needed, and validates that captions use the approved narration. `qa.py` checks the final MP4, extracts the first/middle/last frames of all six scenes plus wipe frames, generates contact sheets, and extracts audio for review. All rendering and frame extraction run on GitHub Actions. No local Remotion Studio or local video render is used.

Original factual claims were flagged before production and retained by explicit user request. They have not been silently rewritten or represented as independently verified claims.

Font: existing bundled Noto Sans variable font, with its existing project license.
