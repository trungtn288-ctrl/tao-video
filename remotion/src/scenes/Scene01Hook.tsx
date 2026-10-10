import { AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { colors } from "../components/SceneLayout";
import { PostMealLifestyle } from "./Scene01Lifestyle";
import type { SceneCopy } from "../videoData";

export const Scene01Hook: React.FC<SceneCopy> = ({
  title,
  voiceover,
  onScreen,
  mediaSlot,
}) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: colors.cream, overflow: "hidden", color: colors.ink, fontFamily: "Inter, Segoe UI, sans-serif" }}>
      <PostMealLifestyle />
      <Interactive.Div name="Headline light wash" style={{ position: "absolute", inset: "0 0 auto", height: 660, background: "linear-gradient(180deg, #fff8ed 64%, rgba(255,248,237,0))" }} />
      <Interactive.Div name="Approved hook text" style={{ position: "absolute", left: 86, right: 100, top: 164, fontSize: 84, fontWeight: 800, lineHeight: 1.14, letterSpacing: -3, translate: interpolate(frame, [0, 20], ["0px 12px", "0px 0px"], { extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) }) }}>
        {onScreen}
      </Interactive.Div>
      <Interactive.Div name="Hook accent" style={{ position: "absolute", left: 88, top: 115, height: 7, width: interpolate(frame, [0, 22], [44, 108], { extrapolateRight: "clamp" }), borderRadius: 8, backgroundColor: colors.tealDark }} />
      {/* Approved narration and replaceable media remain production inputs, not extra viewer copy. */}
      <div hidden data-scene={title} data-media-slot={mediaSlot}>{voiceover}</div>
    </AbsoluteFill>
  );
};
