import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  spring,
  useCurrentFrame,
} from "remotion";

export const C = {
  cream: "#F4F1E9",
  ink: "#163F3B",
  green: "#22776A",
  mint: "#D8E7DD",
  orange: "#DC794D",
  muted: "#6B7D75",
  white: "#FFFDF8",
};
export const font = '"Segoe UI", Arial, sans-serif';
export const ease = {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
} as const;

export const Paper: React.FC<{ children: React.ReactNode; dark?: boolean }> = ({
  children,
  dark,
}) => (
  <AbsoluteFill
    style={{
      background: dark ? C.ink : C.cream,
      color: dark ? C.cream : C.ink,
      fontFamily: font,
    }}
  >
    <AbsoluteFill
      style={{
        backgroundImage: `radial-gradient(${dark ? "#ffffff08" : "#163f3b09"} 1px, transparent 1px)`,
        backgroundSize: "14px 14px",
      }}
    />
    {children}
  </AbsoluteFill>
);

export const Reveal: React.FC<{
  children?: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => {
  const f = useCurrentFrame();
  return (
    <div
      style={{
        ...style,
        opacity: interpolate(f, [delay, delay + 16], [0, 1], ease),
        translate: `0 ${interpolate(f, [delay, delay + 24], [32, 0], ease)}px`,
      }}
    >
      {children}
    </div>
  );
};

export const Eyebrow: React.FC<{
  number: string;
  label: string;
  light?: boolean;
}> = ({ number, label, light }) => (
  <div
    style={{
      position: "absolute",
      left: 72,
      right: 72,
      top: 96,
      display: "flex",
      alignItems: "center",
      gap: 22,
      fontSize: 25,
      fontWeight: 650,
      letterSpacing: 3,
      color: light ? C.cream : C.green,
    }}
  >
    <span
      style={{
        width: 52,
        height: 52,
        borderRadius: "50%",
        border: `1px solid ${light ? "#ffffff55" : "#22776a55"}`,
        display: "grid",
        placeItems: "center",
        letterSpacing: 0,
      }}
    >
      {number}
    </span>
    {label}
    <div
      style={{
        height: 1,
        flex: 1,
        background: light ? "#ffffff44" : "#22776a44",
      }}
    />
  </div>
);

export const Head: React.FC<{
  children: React.ReactNode;
  top?: number;
  size?: number;
  light?: boolean;
}> = ({ children, top = 205, size = 86, light }) => (
  <Reveal
    style={{
      position: "absolute",
      top,
      left: 72,
      right: 72,
      fontSize: size,
      fontWeight: 750,
      lineHeight: 1.12,
      letterSpacing: -2.7,
      color: light ? C.cream : C.ink,
    }}
  >
    {children}
  </Reveal>
);

export const Photo: React.FC<{
  name: string;
  style?: React.CSSProperties;
  zoom?: number;
  position?: string;
}> = ({ name, style, zoom = 1.045, position = "center" }) => {
  const f = useCurrentFrame();
  return (
    <div style={{ overflow: "hidden", ...style }}>
      <Img
        src={staticFile(`r3/${name}.png`)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: position,
          scale: interpolate(f, [0, 240], [1, zoom], ease),
        }}
      />
    </div>
  );
};

export const Chip: React.FC<{
  children: React.ReactNode;
  dark?: boolean;
  style?: React.CSSProperties;
}> = ({ children, dark, style }) => (
  <div
    style={{
      padding: "15px 25px",
      borderRadius: 100,
      background: dark ? C.ink : C.mint,
      color: dark ? C.cream : C.green,
      fontSize: 30,
      fontWeight: 600,
      width: "fit-content",
      ...style,
    }}
  >
    {children}
  </div>
);

export const Icon: React.FC<{
  kind: "feet" | "weight" | "paper" | "shield" | "clock" | "arrow";
  size?: number;
  color?: string;
}> = ({ kind, size = 120, color = C.green }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    stroke={color}
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {kind === "weight" ? (
      <>
        <path d="M28 48v24M18 42v36M92 48v24M102 42v36M28 60h64" />
        <path d="M15 35h13v50H15zM92 35h13v50H92z" />
      </>
    ) : kind === "feet" ? (
      <>
        <ellipse
          cx="42"
          cy="67"
          rx="12"
          ry="24"
          transform="rotate(-24 42 67)"
        />
        <ellipse cx="78" cy="48" rx="12" ry="24" transform="rotate(24 78 48)" />
        <circle cx="31" cy="36" r="5" />
        <circle cx="92" cy="19" r="5" />
      </>
    ) : kind === "paper" ? (
      <>
        <path d="M30 16h44l18 20v69H30zM73 16v23h19M43 58h34M43 73h34M43 88h22" />
      </>
    ) : kind === "shield" ? (
      <>
        <path d="M60 12 100 29v29c0 25-23 43-40 52-17-9-40-27-40-52V29z" />
        <path d="M60 39v36M42 57h36" />
      </>
    ) : kind === "clock" ? (
      <>
        <circle cx="60" cy="66" r="40" />
        <path d="M60 66V43l19 13M47 10h26M60 10v16" />
      </>
    ) : (
      <path d="M18 60h80M73 34l26 26-26 26" />
    )}
  </svg>
);

export const Pop: React.FC<{
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => {
  const f = useCurrentFrame();
  return (
    <div
      style={{
        ...style,
        scale: spring({
          frame: f - delay,
          fps: 30,
          config: { damping: 200 },
          durationInFrames: 30,
        }),
        opacity: interpolate(f, [delay, delay + 10], [0, 1], ease),
      }}
    >
      {children}
    </div>
  );
};
