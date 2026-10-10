import { Interactive } from "remotion";
import { SceneFrame, colors } from "../components/SceneLayout";
import { StudyCards } from "../components/VisualPrimitives";
import type { SceneCopy } from "../videoData";

export const Scene04Evidence: React.FC<SceneCopy> = ({
  title,
  voiceover,
  onScreen,
  mediaSlot,
}) => {
  return (
    <SceneFrame
      label="19–24s"
      eyebrow={title}
      onScreen={onScreen}
      voiceover={voiceover}
      mediaSlot={mediaSlot}
    >
      <StudyCards />
      <Interactive.Div
        name="Meta analysis badge"
        style={{
          position: "absolute",
          left: 210,
          right: 210,
          top: 628,
          height: 154,
          borderRadius: 40,
          backgroundColor: colors.ink,
          color: colors.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize: 44,
          lineHeight: 1.16,
          fontWeight: 950,
        }}
      >
        2026 · 39 nghiên cứu
      </Interactive.Div>
    </SceneFrame>
  );
};
