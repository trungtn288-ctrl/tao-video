import { Interactive } from "remotion";
import { SceneFrame, colors } from "../components/SceneLayout";
import { PersonIcon } from "../components/VisualPrimitives";
import type { SceneCopy } from "../videoData";

export const Scene05DiscoveryTwo: React.FC<SceneCopy> = ({
  title,
  voiceover,
  onScreen,
  mediaSlot,
}) => {
  return (
    <SceneFrame
      label="24–29s"
      eyebrow={title}
      onScreen={onScreen}
      voiceover={voiceover}
      mediaSlot={mediaSlot}
    >
      <Interactive.Div
        name="Sitting comparison panel"
        style={{
          position: "absolute",
          left: 74,
          top: 172,
          width: 388,
          height: 590,
          borderRadius: 46,
          backgroundColor: "#fff4f1",
          border: `4px solid ${colors.coral}`,
        }}
      />
      <Interactive.Div
        name="Walking comparison panel"
        style={{
          position: "absolute",
          right: 74,
          top: 172,
          width: 388,
          height: 590,
          borderRadius: 46,
          backgroundColor: "#effff8",
          border: `4px solid ${colors.teal}`,
        }}
      />
      <Interactive.Div
        name="Sitting label"
        style={{
          position: "absolute",
          left: 110,
          top: 220,
          width: 316,
          textAlign: "center",
          fontSize: 42,
          fontWeight: 950,
          color: colors.coral,
        }}
      >
        NGỒI YÊN
      </Interactive.Div>
      <Interactive.Div
        name="Walking label"
        style={{
          position: "absolute",
          right: 110,
          top: 220,
          width: 316,
          textAlign: "center",
          fontSize: 42,
          fontWeight: 950,
          color: colors.tealDark,
        }}
      >
        ĐI BỘ SAU ĂN
      </Interactive.Div>
      <PersonIcon x={166} y={396} color={colors.coral} scale={0.92} />
      <PersonIcon x={626} y={396} color={colors.teal} walking scale={0.92} />
      <Interactive.Div
        name="Comparison sign"
        style={{
          position: "absolute",
          left: 480,
          top: 440,
          width: 88,
          height: 88,
          borderRadius: 999,
          backgroundColor: colors.ink,
          color: colors.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 58,
          fontWeight: 950,
        }}
      >
        &gt;
      </Interactive.Div>
    </SceneFrame>
  );
};
