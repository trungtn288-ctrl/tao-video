import { Series } from "remotion";
import { Scene01Hook } from "./scenes/Scene01Hook";
import { Scene02ReHook } from "./scenes/Scene02ReHook";
import { Scene03Discovery } from "./scenes/Scene03Discovery";
import { Scene04Evidence } from "./scenes/Scene04Evidence";
import { Scene05DiscoveryTwo } from "./scenes/Scene05DiscoveryTwo";
import { Scene06Action } from "./scenes/Scene06Action";
import { Scene07Payoff } from "./scenes/Scene07Payoff";
import { Scene08SafetyCaveat } from "./scenes/Scene08SafetyCaveat";
import { Scene09Cta } from "./scenes/Scene09Cta";
import { approvedScript, sceneDurations } from "./videoData";

export const MealWalkShort: React.FC = () => {
  return (
    <Series>
      <Series.Sequence name="Scene 1 Hook" durationInFrames={150} premountFor={30}>
        <Scene01Hook {...approvedScript.scene01} />
      </Series.Sequence>
      <Series.Sequence name="Scene 2 Re-hook" durationInFrames={120} premountFor={30}>
        <Scene02ReHook {...approvedScript.scene02} />
      </Series.Sequence>
      <Series.Sequence name="Scene 3 Discovery" durationInFrames={300} premountFor={30}>
        <Scene03Discovery {...approvedScript.scene03} />
      </Series.Sequence>
      <Series.Sequence name="Scene 4 Evidence" durationInFrames={150} premountFor={30}>
        <Scene04Evidence {...approvedScript.scene04} />
      </Series.Sequence>
      <Series.Sequence name="Scene 5 Discovery 2" durationInFrames={150} premountFor={30}>
        <Scene05DiscoveryTwo {...approvedScript.scene05} />
      </Series.Sequence>
      <Series.Sequence name="Scene 6 Action" durationInFrames={180} premountFor={30}>
        <Scene06Action {...approvedScript.scene06} />
      </Series.Sequence>
      <Series.Sequence name="Scene 7 Payoff" durationInFrames={240} premountFor={30}>
        <Scene07Payoff {...approvedScript.scene07} />
      </Series.Sequence>
      <Series.Sequence name="Scene 8 Safety Caveat" durationInFrames={180} premountFor={30}>
        <Scene08SafetyCaveat {...approvedScript.scene08} />
      </Series.Sequence>
      <Series.Sequence name="Scene 9 CTA" durationInFrames={120} premountFor={30}>
        <Scene09Cta {...approvedScript.scene09} />
      </Series.Sequence>
    </Series>
  );
};

export const sceneDurationFrames = sceneDurations;
