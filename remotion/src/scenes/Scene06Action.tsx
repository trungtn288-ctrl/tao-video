import { Sequence } from "remotion";
import { SceneFrame } from "../components/SceneLayout";
import { ClockIcon, PersonIcon, WalkingPath } from "../components/VisualPrimitives";
import type { SceneCopy } from "../videoData";

export const Scene06Action: React.FC<SceneCopy> = ({
  title,
  voiceover,
  onScreen,
  mediaSlot,
}) => {
  return (
    <SceneFrame
      label="29–35s"
      eyebrow={title}
      onScreen={onScreen}
      voiceover={voiceover}
      mediaSlot={mediaSlot}
    >
      <ClockIcon />
      <Sequence name="Gentle walking under clock" from={82} durationInFrames={98} premountFor={30}>
        <WalkingPath />
        <PersonIcon x={478} y={616} color="#20b8aa" walking scale={0.82} />
      </Sequence>
    </SceneFrame>
  );
};
