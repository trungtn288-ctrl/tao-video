import {
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors } from "./SceneLayout";

type PersonProps = {
  readonly x: number;
  readonly y: number;
  readonly color?: string;
  readonly walking?: boolean;
  readonly scale?: number;
};

export const PersonIcon: React.FC<PersonProps> = ({
  x,
  y,
  color = colors.teal,
  walking = false,
  scale = 1,
}) => {
  const frame = useCurrentFrame();
  const bob = walking ? Math.sin(frame / 5) * 7 : 0;

  return (
    <Interactive.Div
      name="Faceless person"
      style={{
        position: "absolute",
        left: x,
        top: y + bob,
        width: 180 * scale,
        height: 300 * scale,
      }}
    >
      <Interactive.Div
        name="Head"
        style={{
          position: "absolute",
          left: 62 * scale,
          top: 0,
          width: 58 * scale,
          height: 58 * scale,
          borderRadius: 999,
          backgroundColor: "#ffd8b8",
        }}
      />
      <Interactive.Div
        name="Body"
        style={{
          position: "absolute",
          left: 46 * scale,
          top: 70 * scale,
          width: 88 * scale,
          height: 118 * scale,
          borderRadius: 36 * scale,
          backgroundColor: color,
        }}
      />
      <Interactive.Div
        name="Left arm"
        style={{
          position: "absolute",
          left: 26 * scale,
          top: 92 * scale,
          width: 28 * scale,
          height: 108 * scale,
          borderRadius: 18 * scale,
          backgroundColor: color,
          rotate: walking ? "-20deg" : "10deg",
        }}
      />
      <Interactive.Div
        name="Right arm"
        style={{
          position: "absolute",
          left: 126 * scale,
          top: 92 * scale,
          width: 28 * scale,
          height: 108 * scale,
          borderRadius: 18 * scale,
          backgroundColor: color,
          rotate: walking ? "20deg" : "-10deg",
        }}
      />
      <Interactive.Div
        name="Left leg"
        style={{
          position: "absolute",
          left: 60 * scale,
          top: 178 * scale,
          width: 30 * scale,
          height: 116 * scale,
          borderRadius: 18 * scale,
          backgroundColor: colors.ink,
          rotate: walking ? "18deg" : "0deg",
        }}
      />
      <Interactive.Div
        name="Right leg"
        style={{
          position: "absolute",
          left: 98 * scale,
          top: 178 * scale,
          width: 30 * scale,
          height: 116 * scale,
          borderRadius: 18 * scale,
          backgroundColor: colors.ink,
          rotate: walking ? "-18deg" : "0deg",
        }}
      />
    </Interactive.Div>
  );
};

export const TableAndSofa: React.FC = () => {
  return (
    <>
      <Interactive.Div
        name="Meal table"
        style={{
          position: "absolute",
          left: 98,
          top: 556,
          width: 310,
          height: 98,
          borderRadius: 46,
          backgroundColor: colors.yellow,
          boxShadow: "0 16px 0 rgba(18,50,58,0.08)",
        }}
      />
      <Interactive.Div
        name="Plate"
        style={{
          position: "absolute",
          left: 220,
          top: 575,
          width: 70,
          height: 70,
          borderRadius: 999,
          backgroundColor: colors.white,
          border: "8px solid #f2c86a",
        }}
      />
      <Interactive.Div
        name="Sofa"
        style={{
          position: "absolute",
          right: 96,
          bottom: 154,
          width: 344,
          height: 168,
          borderRadius: 44,
          backgroundColor: "#a7ddff",
          boxShadow: "0 20px 0 rgba(18,50,58,0.08)",
        }}
      />
      <Interactive.Div
        name="Sofa back"
        style={{
          position: "absolute",
          right: 118,
          bottom: 266,
          width: 300,
          height: 104,
          borderRadius: 42,
          backgroundColor: "#83ccfb",
        }}
      />
    </>
  );
};

export const WalkingPath: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Walking path"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 708,
          height: 18,
          borderRadius: 999,
          backgroundColor: colors.line,
        }}
      />
      <Interactive.Div
        name="Walking progress"
        style={{
          position: "absolute",
          left: 120,
          top: 708,
          width: interpolate(frame, [0, 90], [0, 690], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          height: 18,
          borderRadius: 999,
          backgroundColor: colors.teal,
        }}
      />
    </>
  );
};

export const QualitativeTrendChart: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Svg
      name="Qualitative blood glucose trend chart"
      width={820}
      height={430}
      viewBox="0 0 820 430"
      style={{
        position: "absolute",
        left: 60,
        top: 236,
        overflow: "visible",
      }}
    >
      <Interactive.Path
        name="Chart background"
        d="M 40 30 H 780 V 370 H 40 Z"
        fill="#ffffff"
        stroke={colors.line}
        strokeWidth={5}
      />
      <Interactive.Path
        name="Vertical axis"
        d="M 110 330 V 78"
        stroke={colors.muted}
        strokeWidth={6}
        strokeLinecap="round"
      />
      <Interactive.Path
        name="Horizontal axis"
        d="M 110 330 H 720"
        stroke={colors.muted}
        strokeWidth={6}
        strokeLinecap="round"
      />
      <Interactive.Path
        name="Sitting trend"
        d="M 130 300 C 250 140, 390 112, 560 220 C 620 258, 676 282, 710 294"
        fill="none"
        stroke={colors.coral}
        strokeWidth={12}
        strokeLinecap="round"
        strokeDasharray={interpolate(frame, [12, 76], [0, 760], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        })}
      />
      <Interactive.Path
        name="Walking trend"
        d="M 130 300 C 260 218, 398 196, 560 250 C 620 270, 676 286, 710 298"
        fill="none"
        stroke={colors.teal}
        strokeWidth={12}
        strokeLinecap="round"
        strokeDasharray={interpolate(frame, [24, 88], [0, 760], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        })}
      />
    </Interactive.Svg>
  );
};

export const ChartLegend: React.FC = () => (
  <>
    <Interactive.Div
      name="Sitting legend"
      style={{
        position: "absolute",
        left: 132,
        top: 692,
        display: "flex",
        alignItems: "center",
        gap: 14,
        fontSize: 30,
        fontWeight: 800,
        color: colors.ink,
      }}
    >
      <span
        style={{
          width: 34,
          height: 14,
          borderRadius: 999,
          backgroundColor: colors.coral,
          display: "inline-block",
        }}
      />
      Ngồi yên
    </Interactive.Div>
    <Interactive.Div
      name="Walking legend"
      style={{
        position: "absolute",
        left: 132,
        top: 748,
        display: "flex",
        alignItems: "center",
        gap: 14,
        fontSize: 30,
        fontWeight: 800,
        color: colors.ink,
      }}
    >
      <span
        style={{
          width: 34,
          height: 14,
          borderRadius: 999,
          backgroundColor: colors.teal,
          display: "inline-block",
        }}
      />
      Đi bộ nhẹ
    </Interactive.Div>
  </>
);

export const StudyCards: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Study card one"
        style={{
          position: "absolute",
          left: 110,
          top: 240,
          width: 210,
          height: 270,
          borderRadius: 30,
          backgroundColor: colors.white,
          border: `4px solid ${colors.line}`,
          rotate: "-7deg",
          opacity: interpolate(frame, [0, 24], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <Interactive.Div
        name="Study card two"
        style={{
          position: "absolute",
          left: 314,
          top: 205,
          width: 210,
          height: 270,
          borderRadius: 30,
          backgroundColor: colors.white,
          border: `4px solid ${colors.line}`,
          rotate: "4deg",
          opacity: interpolate(frame, [14, 38], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <Interactive.Div
        name="Study card three"
        style={{
          position: "absolute",
          left: 516,
          top: 248,
          width: 210,
          height: 270,
          borderRadius: 30,
          backgroundColor: colors.white,
          border: `4px solid ${colors.line}`,
          rotate: "8deg",
          opacity: interpolate(frame, [28, 52], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <Interactive.Div
        name="Converging arrow"
        style={{
          position: "absolute",
          left: 170,
          top: 590,
          width: interpolate(frame, [48, 92], [0, 600], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          height: 18,
          borderRadius: 999,
          backgroundColor: colors.teal,
        }}
      />
      <Interactive.Div
        name="Simple result chart"
        style={{
          position: "absolute",
          left: 298,
          bottom: 154,
          width: 350,
          height: 190,
          borderRadius: 34,
          backgroundColor: "#f5fffb",
          border: `4px solid ${colors.line}`,
        }}
      />
    </>
  );
};

export const ClockIcon: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  return (
    <>
      <Interactive.Div
        name="Clock face"
        style={{
          position: "absolute",
          left: 277,
          top: 230,
          width: 390,
          height: 390,
          borderRadius: 999,
          backgroundColor: colors.white,
          border: `18px solid ${colors.teal}`,
          boxShadow: "0 24px 60px rgba(18,50,58,0.12)",
        }}
      />
      <Interactive.Div
        name="Clock hand"
        style={{
          position: "absolute",
          left: 462,
          top: 288,
          width: 20,
          height: 150,
          borderRadius: 999,
          backgroundColor: colors.ink,
          transformOrigin: "10px 140px",
          rotate: interpolate(frame, [0, durationInFrames - 1], ["-60deg", "80deg"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <Interactive.Div
        name="Clock label"
        style={{
          position: "absolute",
          left: 250,
          right: 250,
          top: 650,
          textAlign: "center",
          fontSize: 76,
          fontWeight: 950,
          color: colors.ink,
        }}
      >
        5 → 10 phút
      </Interactive.Div>
    </>
  );
};

export const PillAndConversation: React.FC = () => (
  <>
    <Interactive.Div
      name="Medication icon"
      style={{
        position: "absolute",
        left: 146,
        top: 266,
        width: 260,
        height: 132,
        borderRadius: 70,
        backgroundColor: colors.white,
        border: `5px solid ${colors.teal}`,
        rotate: "-14deg",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 128,
          top: -4,
          width: 6,
          height: 140,
          backgroundColor: colors.teal,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 134,
          top: 0,
          width: 132,
          height: 132,
          backgroundColor: "#dff7ff",
        }}
      />
    </Interactive.Div>
    <Interactive.Div
      name="Conversation bubble"
      style={{
        position: "absolute",
        right: 114,
        top: 246,
        width: 350,
        height: 238,
        borderRadius: 42,
        backgroundColor: colors.white,
        border: `5px solid ${colors.line}`,
      }}
    />
    <PersonIcon x={490} y={570} color={colors.blue} scale={0.82} />
    <PersonIcon x={258} y={590} color={colors.teal} scale={0.78} />
  </>
);
