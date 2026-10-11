# Video workflow

- Repository: `trungtn288-ctrl/tao-video`; Remotion project: `remotion/`.
- When creating or editing a Remotion video, render MP4 (H.264) and inspect representative frames using `.github/workflows/render-video.yml` on GitHub Actions by default.
- Do not start Remotion Studio or render on the user's personal computer. Edit source in Cloud; rendering and frame generation belong on GitHub-hosted runners. This repository instruction overrides preview-first skill defaults.
- Use Remotion skills when available; they can be read in Cloud without Studio. Never require a personal computer to finish a video.
- Commit and push the intended source before rendering. Pushes to `main` affecting `remotion/**`, this file, or the render workflow automatically render `MealWalkKnowledgeR3`. For another composition, use GitHub Actions → Render Remotion video → Run workflow → composition ID.
- Prefer the GitHub connector for repository and Actions reads/downloads. Git push also works from this Cloud environment. If CLI API calls are blocked, do not bypass networking or assume `gh auth status` proves the injected credential is invalid. The connector does not currently expose workflow dispatch; use the push trigger or the mobile GitHub web UI.
- Follow the exact run/commit to completion, download the MP4 artifact to verify it is accessible, inspect the frame artifact, and return the workflow and artifact download links. Do not declare setup or a video complete on a queued run or missing artifact.
- Artifacts expire after 14 days and GitHub artifact downloads require login. Keep source/assets in Git; do not commit generated MP4 files or credentials.
- If CLI workflow dispatch is required, Cloud needs allowed access to `api.github.com` and an identity authorized for this repository (Contents write, Workflows write, Actions write/read). Configure credentials through the supported environment configuration UI, never in source or chat.

## Project skill: Remotion Video V2

- When the user requests Remotion Video V2, Remotion V2, or `$remotion-video-v2`, read `.agents/skills/remotion-video-v2/SKILL.md` and its linked references before creating or editing a video.
- Resolve relative paths in the skill from its directory. The bundled JPEGs are layout references, not new video content.
- V2 revision 2026-10-11-elevenlabs-fonts applies the 26-part visual standard, Vietnamese ElevenLabs then HeyGen voice routing, and automatic licensed Vietnamese font selection. Read the asset inventory: the 26 original sample images are not bundled. Historical baselines are for comparison only. Do not select V2 when the user explicitly requests V1.
- Apply this repository's Cloud editing and GitHub Actions rendering workflow when following the skill.
