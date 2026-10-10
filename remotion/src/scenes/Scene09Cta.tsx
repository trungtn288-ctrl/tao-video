import { Sequence } from "remotion";
import { SceneFrame } from "../components/SceneLayout";
import { PersonIcon, TableAndSofa, WalkingPath } from "../components/VisualPrimitives";
import type { SceneCopy } from "../videoData";

export const Scene09Cta: React.FC<SceneCopy> = ({
  title,
  voiceover,
  onScreen,
  mediaSlot,
}) => {
  return (
    <SceneFrame
      label="49–53s"
      eyebrow={title}
      onScreen={onScreen}
      voiceover={voiceover}
      mediaSlot={mediaSlot}
    >
      <TableAndSofa />
      <Sequence name="Stand up from table" durationInFrames={54} premountFor={30}>
        <PersonIcon x={390} y={438} color="#58a6ff" scale={1.02} />
      </Sequence>
      <Sequence name="Walk after next meal" from={42} durationInFrames={78} premountFor={30}>
        <WalkingPath />
        <PersonIcon x={520} y={500} color="#20b8aa" walking scale={1.04} />
      </Sequence>
    </SceneFrame>
  );
};
