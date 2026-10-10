import { Interactive } from "remotion";
import { SceneFrame, colors } from "../components/SceneLayout";
import {
  ChartLegend,
  PersonIcon,
  QualitativeTrendChart,
} from "../components/VisualPrimitives";
import type { SceneCopy } from "../videoData";

export const Scene03Discovery: React.FC<SceneCopy> = ({
  title,
  voiceover,
  onScreen,
  mediaSlot,
}) => {
  return (
    <SceneFrame
      label="9–19s"
      eyebrow={title}
      onScreen={onScreen}
      voiceover={voiceover}
      mediaSlot={mediaSlot}
    >
      <Interactive.Div
        name="Meal icon"
        style={{
          position: "absolute",
          left: 112,
          top: 96,
          width: 178,
          height: 178,
          borderRadius: 999,
          backgroundColor: colors.white,
          border: `5px solid ${colors.yellow}`,
        }}
      />
      <Interactive.Div
        name="Meal plate center"
        style={{
          position: "absolute",
          left: 164,
          top: 148,
          width: 74,
          height: 74,
          borderRadius: 999,
          backgroundColor: colors.yellow,
        }}
      />
      <Interactive.Div
        name="Arrow from meal to chart"
        style={{
          position: "absolute",
          left: 320,
          top: 180,
          width: 300,
          height: 14,
          borderRadius: 999,
          backgroundColor: colors.line,
        }}
      />
      <PersonIcon x={632} y={76} color={colors.teal} walking scale={0.58} />
      <QualitativeTrendChart />
      <ChartLegend />
      <Interactive.Div
        name="Qualitative note"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 76,
          textAlign: "center",
          fontSize: 28,
          lineHeight: 1.25,
          fontWeight: 800,
          color: colors.muted,
        }}
      >
        Minh họa xu hướng tương đối, không phải giá trị đo.
      </Interactive.Div>
    </SceneFrame>
  );
};
