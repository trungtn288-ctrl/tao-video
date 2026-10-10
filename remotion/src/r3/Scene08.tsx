import { C, Paper, Eyebrow, Head, Icon, Pop, Reveal } from "./design";
export const R3Scene08 = () => (
  <Paper dark>
    <Eyebrow number="08" label="CHỌN VẬN ĐỘNG PHÙ HỢP" light />
    <Head light size={74}>
      Dùng insulin hoặc
      <br />
      thuốc hạ đường huyết?
    </Head>
    <Pop
      delay={15}
      style={{
        position: "absolute",
        left: 385,
        top: 560,
        width: 310,
        height: 310,
        borderRadius: "50%",
        background: "#D8E7DD",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Icon kind="shield" size={170} />
    </Pop>
    <Reveal
      delay={25}
      style={{
        position: "absolute",
        left: 100,
        right: 100,
        top: 970,
        textAlign: "center",
        fontSize: 65,
        fontWeight: 700,
        lineHeight: 1.2,
        color: "#EAC69C",
      }}
    >
      Hỏi nhân viên y tế
    </Reveal>
    <Reveal
      delay={40}
      style={{
        position: "absolute",
        left: 110,
        right: 110,
        top: 1100,
        textAlign: "center",
        fontSize: 37,
        color: C.cream,
        lineHeight: 1.45,
      }}
    >
      về cách vận động phù hợp với bạn.
    </Reveal>
    <div
      style={{
        position: "absolute",
        left: 100,
        right: 100,
        top: 1245,
        textAlign: "center",
        fontSize: 28,
        color: "#B7C9BF",
      }}
    >
      Đặc biệt nếu có nguy cơ hạ đường huyết khi vận động.
    </div>
  </Paper>
);
