import { Interactive } from "remotion";
import { SceneFrame, colors } from "../components/SceneLayout";
import { ChartLegend, PersonIcon, QualitativeTrendChart } from "../components/VisualPrimitives";
import type { SceneCopy } from "../videoData";

export const Scene07Payoff: React.FC<SceneCopy> = ({
  title,
  voiceover,
  onScreen,
  mediaSlot,
}) => {
  return (
    <SceneFrame
      label="35–43s"
      eyebrow={title}
      onScreen={onScreen}
      voiceover={voiceover}
      mediaSlot={mediaSlot}
    >
      <QualitativeTrendChart />
      <ChartLegend />
      <PersonIcon x={388} y={98} color={colors.teal} walking scale={0.68} />
      <Interactive.Div
        name="Movement badge"
        style={{
          position: "absolute",
          right: 112,
          top: 112,
          width: 210,
          height: 210,
          borderRadius: 999,
          backgroundColor: colors.teal,
          color: colors.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize: 34,
          lineHeight: 1.12,
          fontWeight: 950,
        }}
      >
        thêm vận động
      </Interactive.Div>
      <Interactive.Div
        name="Simple payoff note"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 80,
          textAlign: "center",
          fontSize: 36,
          lineHeight: 1.18,
          fontWeight: 850,
          color: colors.ink,
        }}
      >
        Một khoảng thời gian nhỏ trong ngày có thể được dùng để vận động nhẹ.
      </Interactive.Div>
    </SceneFrame>
  );
};
