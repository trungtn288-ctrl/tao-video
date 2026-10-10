import { AbsoluteFill, Sequence, staticFile, useCurrentFrame } from "remotion";
import { Audio } from "@remotion/media";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { Caption } from "@remotion/captions";
import pages from "./caption-pages.json";
import { C, font } from "./design";
import { R3Scene01 } from "./Scene01";
import { R3Scene02 } from "./Scene02";
import { R3Scene03 } from "./Scene03";
import { R3Scene04 } from "./Scene04";
import { R3Scene05 } from "./Scene05";
import { R3Scene06 } from "./Scene06";
import { R3Scene07 } from "./Scene07";
import { R3Scene08 } from "./Scene08";
import { R3Scene09 } from "./Scene09";

export const R3Captions = () => {
  const f = useCurrentFrame();
  const ms = (f / 30) * 1000;
  const groups: Caption[][] = pages;
  const p = groups.find(
    (g) => ms >= g[0].startMs - 40 && ms <= g[g.length - 1].endMs + 90,
  );
  if (!p) return null;
  return (
    <div
      style={{
        position: "absolute",
        left: 92,
        right: 92,
        top: 1390,
        fontFamily: font,
        fontSize: 42,
        lineHeight: 1.38,
        fontWeight: 650,
        textAlign: "center",
        color: C.cream,
        padding: "24px 30px",
        background: "#12312FEB",
        border: "1px solid #FFFFFF16",
        borderRadius: 24,
        boxShadow: "0 12px 35px #00000016",
      }}
    >
      {p.map((w, i) => (
        <span
          key={i}
          style={{
            color: ms >= w.startMs && ms < w.endMs ? "#F2CA9E" : C.cream,
          }}
        >
          {i > 0 ? " " : ""}
          {w.text}
        </span>
      ))}
    </div>
  );
};

export const MealWalkKnowledgeR3 = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.cream }}>
      <TransitionSeries>
        <TransitionSeries.Sequence name="01-Hook" durationInFrames={162}>
          <R3Scene01 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />
        <TransitionSeries.Sequence name="02-ReHook" durationInFrames={132}>
          <R3Scene02 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 12 })}
        />
        <TransitionSeries.Sequence name="03-Explainer" durationInFrames={312}>
          <R3Scene03 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />
        <TransitionSeries.Sequence name="04-Evidence" durationInFrames={162}>
          <R3Scene04 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 12 })}
        />
        <TransitionSeries.Sequence name="05-Comparison" durationInFrames={162}>
          <R3Scene05 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />
        <TransitionSeries.Sequence name="06-Action" durationInFrames={192}>
          <R3Scene06 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />
        <TransitionSeries.Sequence name="07-Payoff" durationInFrames={252}>
          <R3Scene07 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />
        <TransitionSeries.Sequence name="08-Safety" durationInFrames={192}>
          <R3Scene08 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />
        <TransitionSeries.Sequence name="09-CTA" durationInFrames={120}>
          <R3Scene09 />
        </TransitionSeries.Sequence>
      </TransitionSeries>
      <Sequence name="Narration" durationInFrames={1590}>
        <Audio src={staticFile("r3/narration.wav")} />
      </Sequence>
      <Sequence name="Original ambient bed" durationInFrames={1590}>
        <Audio src={staticFile("r3/ambient.wav")} volume={0.42} />
      </Sequence>
      <R3Captions />
      <div
        style={{
          position: "absolute",
          top: 63,
          left: 72,
          right: 72,
          height: 3,
          background: "#9AA99C44",
        }}
      >
        <div
          style={{
            width: `${(f / 1589) * 100}%`,
            height: 3,
            background: "#C89567",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 1660,
          left: 72,
          right: 72,
          fontFamily: font,
          fontSize: 23,
          letterSpacing: 0.3,
          color: f < 150 || (f >= 870 && f < 1470) ? "#DCE5DC" : "#67796D",
        }}
      >
        Thông tin chung · Không thay thế tư vấn y tế cá nhân
      </div>
    </AbsoluteFill>
  );
};
