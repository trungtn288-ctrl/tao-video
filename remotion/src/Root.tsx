import { MedicineSafetyV2 } from './medicine/MedicineSafetyV2';
import medicineTiming from './medicine/timing.json';
import { Composition, Folder } from "remotion";
import { MealWalkShort } from "./MealWalkShort";
import { Scene01Hook } from "./scenes/Scene01Hook";
import { Scene02ReHook } from "./scenes/Scene02ReHook";
import { Scene03Discovery } from "./scenes/Scene03Discovery";
import { Scene04Evidence } from "./scenes/Scene04Evidence";
import { Scene05DiscoveryTwo } from "./scenes/Scene05DiscoveryTwo";
import { Scene06Action } from "./scenes/Scene06Action";
import { Scene07Payoff } from "./scenes/Scene07Payoff";
import { Scene08SafetyCaveat } from "./scenes/Scene08SafetyCaveat";
import { Scene09Cta } from "./scenes/Scene09Cta";
import { MealWalkKnowledgeR3 } from "./r3/MealWalkKnowledgeR3";
import { R3Scene01 } from "./r3/Scene01";
import { R3Scene02 } from "./r3/Scene02";
import { R3Scene03 } from "./r3/Scene03";
import { R3Scene04 } from "./r3/Scene04";
import { R3Scene05 } from "./r3/Scene05";
import { R3Scene06 } from "./r3/Scene06";
import { R3Scene07 } from "./r3/Scene07";
import { R3Scene08 } from "./r3/Scene08";
import { R3Scene09 } from "./r3/Scene09";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="MedicineSafetyV2" component={MedicineSafetyV2} durationInFrames={medicineTiming.durationInFrames} fps={30} width={1080} height={1920} />
      <Composition
        id="MealWalkKnowledgeR3"
        component={MealWalkKnowledgeR3}
        durationInFrames={1590}
        fps={30}
        width={1080}
        height={1920}
      />
      <Folder name="R3-Scenes">
        <Composition
          id="R3-01-Hook"
          component={R3Scene01}
          durationInFrames={162}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="R3-02-ReHook"
          component={R3Scene02}
          durationInFrames={132}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="R3-03-Explainer"
          component={R3Scene03}
          durationInFrames={312}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="R3-04-Evidence"
          component={R3Scene04}
          durationInFrames={162}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="R3-05-Comparison"
          component={R3Scene05}
          durationInFrames={162}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="R3-06-Action"
          component={R3Scene06}
          durationInFrames={192}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="R3-07-Payoff"
          component={R3Scene07}
          durationInFrames={252}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="R3-08-Safety"
          component={R3Scene08}
          durationInFrames={192}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="R3-09-CTA"
          component={R3Scene09}
          durationInFrames={120}
          fps={30}
          width={1080}
          height={1920}
        />
      </Folder>
      <Folder name="MealWalkShort-Scenes">
        <Composition
          id="Scene01-Hook"
          component={Scene01Hook}
          durationInFrames={150}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "SCENE 1 — HOOK",
            voiceover:
              "Sau khi ăn xong, nếu bạn thường ngồi xuống ngay, có một thay đổi rất nhỏ có thể đáng thử: đi bộ một đoạn ngắn.",
            onScreen: "Ăn xong → thử đi bộ một đoạn ngắn",
            mediaSlot:
              "PLACEHOLDER: dining table, sofa, gentle walking transition",
          }}
        />
        <Composition
          id="Scene02-ReHook"
          component={Scene02ReHook}
          durationInFrames={120}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "SCENE 2 — RE-HOOK",
            voiceover:
              "Điều thú vị là bạn không nhất thiết phải tập một buổi thể dục dài.",
            onScreen: "Không cần một buổi tập dài",
            mediaSlot: "PLACEHOLDER: intense workout contrast to easy walking",
          }}
        />
        <Composition
          id="Scene03-Discovery"
          component={Scene03Discovery}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "SCENE 3 — DISCOVERY",
            voiceover:
              "Các nghiên cứu cho thấy những khoảng vận động ngắn sau ăn, đặc biệt là đi bộ, có thể giúp giảm mức tăng đường huyết sau bữa ăn so với việc ngồi yên.",
            onScreen: "Vận động sau ăn → giảm mức tăng đường huyết",
            mediaSlot:
              "PLACEHOLDER: qualitative post-meal glucose trend diagram",
          }}
        />
        <Composition
          id="Scene04-Evidence"
          component={Scene04Evidence}
          durationInFrames={150}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "SCENE 4 — EVIDENCE",
            voiceover:
              "Một phân tích gộp năm 2026 tổng hợp 39 nghiên cứu cũng cho kết quả tương tự.",
            onScreen: "Phân tích gộp 2026: 39 nghiên cứu",
            mediaSlot: "PLACEHOLDER: studies converging into simple chart",
          }}
        />
        <Composition
          id="Scene05-DiscoveryTwo"
          component={Scene05DiscoveryTwo}
          durationInFrames={150}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "SCENE 5 — DISCOVERY 2",
            voiceover:
              "Một nghiên cứu khác cho thấy đi bộ ngay sau khi ăn có hiệu quả tốt hơn đối với đường huyết sau ăn so với không vận động.",
            onScreen: "Đi bộ sau ăn > ngồi yên",
            mediaSlot:
              "PLACEHOLDER: side-by-side sitting versus walking after eating",
          }}
        />
        <Composition
          id="Scene06-Action"
          component={Scene06Action}
          durationInFrames={180}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "SCENE 6 — ACTION",
            voiceover:
              "Sau bữa ăn, thay vì ngồi liên tục, bạn có thể đi bộ nhẹ khoảng 5–10 phút nếu điều kiện cho phép.\n\nKhông cần biến nó thành một buổi tập nặng.",
            onScreen: "5–10 phút đi bộ nhẹ",
            mediaSlot: "PLACEHOLDER: 5 to 10 minute clock and easy walking",
          }}
        />
        <Composition
          id="Scene07-Payoff"
          component={Scene07Payoff}
          durationInFrames={240}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "SCENE 7 — PAYOFF",
            voiceover:
              "Điều bạn nhận được là một cách rất đơn giản để giảm mức tăng đường huyết sau bữa ăn, đồng thời thêm vận động vào một khoảng thời gian vốn thường bị bỏ qua.",
            onScreen: "Một thay đổi nhỏ — thêm vận động vào ngày của bạn",
            mediaSlot: "PLACEHOLDER: relaxed post-meal walk and health icons",
          }}
        />
        <Composition
          id="Scene08-SafetyCaveat"
          component={Scene08SafetyCaveat}
          durationInFrames={180}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "SCENE 8 — SAFETY CAVEAT",
            voiceover:
              "Nếu bạn đang dùng thuốc hạ đường huyết hoặc insulin, đặc biệt nếu từng bị hạ đường huyết khi vận động, nên trao đổi với nhân viên y tế để biết cách vận động phù hợp.",
            onScreen:
              "Đang dùng thuốc hạ đường huyết/insulin? Hãy hỏi nhân viên y tế.",
            mediaSlot:
              "PLACEHOLDER: medication icon and healthcare conversation",
          }}
        />
        <Composition
          id="Scene09-CTA"
          component={Scene09Cta}
          durationInFrames={120}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "SCENE 9 — CTA",
            voiceover:
              "Sau bữa ăn tiếp theo, thử đứng dậy và đi bộ nhẹ vài phút thay vì ngồi ngay.",
            onScreen: "Sau bữa ăn tiếp theo: đứng dậy → đi bộ nhẹ vài phút",
            mediaSlot: "PLACEHOLDER: stand up from table and walk gently",
          }}
        />
      </Folder>
      <Composition
        id="MealWalkShort"
        component={MealWalkShort}
        durationInFrames={1590}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};

