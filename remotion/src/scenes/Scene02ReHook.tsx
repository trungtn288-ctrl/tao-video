import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { SceneFrame, colors } from "../components/SceneLayout";
import { PersonIcon, WalkingPath } from "../components/VisualPrimitives";
import type { SceneCopy } from "../videoData";

export const Scene02ReHook: React.FC<SceneCopy> = ({
  title,
  voiceover,
  onScreen,
  mediaSlot,
}) => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame
      label="5–9s"
      eyebrow={title}
      onScreen={onScreen}
      voiceover={voiceover}
      mediaSlot={mediaSlot}
    >
      <Interactive.Div
        name="Hard workout panel"
        style={{
          position: "absolute",
          left: 72,
          top: 184,
          width: 360,
          height: 520,
          borderRadius: 42,
          backgroundColor: "#fff1ef",
          border: `4px solid ${colors.coral}`,
          opacity: interpolate(frame, [0, 42, 62], [1, 1, 0.36], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <Interactive.Div
        name="Long workout crossout"
        style={{
          position: "absolute",
          left: 98,
          top: 438,
          width: interpolate(frame, [34, 66], [0, 306], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          height: 16,
          borderRadius: 999,
          backgroundColor: colors.coral,
          rotate: "-18deg",
        }}
      />
      <Interactive.Div
        name="Easy walk panel"
        style={{
          position: "absolute",
          right: 72,
          top: 184,
          width: 360,
          height: 520,
          borderRadius: 42,
          backgroundColor: "#f0fff8",
          border: `4px solid ${colors.teal}`,
          opacity: interpolate(frame, [24, 54], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <PersonIcon x={162} y={360} color={colors.coral} scale={0.94} />
      <WalkingPath />
      <PersonIcon x={610} y={420} color={colors.teal} walking scale={0.92} />
      <Interactive.Div
        name="Easy walking caption"
        style={{
          position: "absolute",
          left: 560,
          right: 94,
          bottom: 144,
          textAlign: "center",
          fontSize: 40,
          fontWeight: 900,
          color: colors.tealDark,
        }}
      >
        đi bộ nhẹ
      </Interactive.Div>
    </SceneFrame>
  );
};
