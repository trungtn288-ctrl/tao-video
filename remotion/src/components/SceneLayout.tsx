import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { ReactNode } from "react";

export type SceneFrameProps = {
  readonly label: string;
  readonly eyebrow: string;
  readonly onScreen: string;
  readonly voiceover: string;
  readonly mediaSlot: string;
  readonly children: ReactNode;
};

export const colors = {
  ink: "#12323a",
  muted: "#5f7780",
  teal: "#20b8aa",
  tealDark: "#0d8f86",
  mint: "#daf8ee",
  blue: "#58a6ff",
  yellow: "#ffd166",
  coral: "#ff8a7a",
  cream: "#fff8ed",
  white: "#ffffff",
  line: "#d9e9e8",
};

export const SceneFrame: React.FC<SceneFrameProps> = ({
  label,
  eyebrow,
  onScreen,
  voiceover,
  mediaSlot,
  children,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.cream,
        color: colors.ink,
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        overflow: "hidden",
      }}
    >
      <Interactive.Div
        name="Soft background shape"
        style={{
          position: "absolute",
          width: 780,
          height: 780,
          borderRadius: 390,
          backgroundColor: "#d8f7ef",
          top: -220,
          right: -260,
          opacity: 0.9,
          scale: interpolate(frame, [0, durationInFrames], [1, 1.08], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <Interactive.Div
        name="Warm background shape"
        style={{
          position: "absolute",
          width: 620,
          height: 620,
          borderRadius: 310,
          backgroundColor: "#fff0c9",
          bottom: -210,
          left: -220,
          opacity: 0.86,
          scale: interpolate(frame, [0, durationInFrames], [1, 1.05], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <Interactive.Div
        name="Scene label"
        style={{
          position: "absolute",
          top: 74,
          left: 80,
          fontSize: 28,
          fontWeight: 800,
          color: colors.tealDark,
          opacity: interpolate(frame, [0, 1], [1, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        {label}
      </Interactive.Div>
      <Interactive.Div
        name="Scene eyebrow"
        style={{
          position: "absolute",
          top: 118,
          left: 80,
          right: 80,
          fontSize: 34,
          fontWeight: 750,
          color: colors.muted,
          opacity: interpolate(frame, [0, 1], [1, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        {eyebrow}
      </Interactive.Div>
      <Interactive.Div
        name="Main on-screen text"
        style={{
          position: "absolute",
          top: 188,
          left: 80,
          right: 80,
          fontSize: 70,
          lineHeight: 1.08,
          fontWeight: 900,
          color: colors.ink,
          opacity: interpolate(frame, [0, 18], [0.42, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 18], ["0px 18px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        {onScreen}
      </Interactive.Div>
      <Interactive.Div
        name="Visual stage"
        style={{
          position: "absolute",
          left: 70,
          right: 70,
          top: 500,
          height: 960,
          borderRadius: 52,
          backgroundColor: "rgba(255,255,255,0.72)",
          border: `3px solid ${colors.line}`,
          boxShadow: "0 28px 80px rgba(18,50,58,0.11)",
          overflow: "hidden",
          opacity: interpolate(frame, [0, 22], [0.72, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        {children}
      </Interactive.Div>
      <Interactive.Div
        name="Voiceover placeholder"
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          bottom: 166,
          padding: "26px 30px",
          borderRadius: 28,
          backgroundColor: "rgba(18,50,58,0.88)",
          color: colors.white,
          fontSize: 26,
          lineHeight: 1.25,
          fontWeight: 600,
          opacity: interpolate(frame, [18, 38], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        VO: {voiceover}
      </Interactive.Div>
      <Interactive.Div
        name="Replaceable media slot note"
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          bottom: 74,
          fontSize: 22,
          color: colors.muted,
          fontWeight: 700,
          opacity: 0.72,
        }}
      >
        {mediaSlot}
      </Interactive.Div>
    </AbsoluteFill>
  );
};
