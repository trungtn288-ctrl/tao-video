import { Interactive } from "remotion";
import { SceneFrame, colors } from "../components/SceneLayout";
import { PillAndConversation } from "../components/VisualPrimitives";
import type { SceneCopy } from "../videoData";

export const Scene08SafetyCaveat: React.FC<SceneCopy> = ({
  title,
  voiceover,
  onScreen,
  mediaSlot,
}) => {
  return (
    <SceneFrame
      label="43–49s"
      eyebrow={title}
      onScreen={onScreen}
      voiceover={voiceover}
      mediaSlot={mediaSlot}
    >
      <PillAndConversation />
      <Interactive.Div
        name="Safety message"
        style={{
          position: "absolute",
          left: 110,
          right: 110,
          bottom: 98,
          padding: "32px 34px",
          borderRadius: 36,
          backgroundColor: "#f5fffb",
          border: `5px solid ${colors.teal}`,
          color: colors.ink,
          textAlign: "center",
          fontSize: 38,
          lineHeight: 1.2,
          fontWeight: 900,
        }}
      >
        Hỏi nhân viên y tế để biết cách vận động phù hợp.
      </Interactive.Div>
    </SceneFrame>
  );
};
