import { C, Paper, Eyebrow, Head, Icon, Reveal, Chip } from "./design";
export const R3Scene02 = () => (
  <Paper>
    <Eyebrow number="02" label="THONG THẢ THÔI" />
    <Head>
      Không cần
      <br />
      <span style={{ color: C.orange }}>tập nặng.</span>
    </Head>
    <Reveal
      delay={8}
      style={{
        position: "absolute",
        left: 72,
        top: 570,
        width: 440,
        height: 590,
        borderRadius: 32,
        background: "#E8E5DC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 55,
      }}
    >
      <div style={{ position: "relative" }}>
        <Icon kind="weight" size={170} color="#9C9E90" />
        <div
          style={{
            position: "absolute",
            width: 210,
            height: 4,
            background: C.orange,
            rotate: "-30deg",
            left: -20,
            top: 85,
          }}
        />
      </div>
      <div style={{ fontSize: 38, fontWeight: 600, color: C.muted }}>
        Tập cường độ cao
      </div>
    </Reveal>
    <Reveal
      delay={18}
      style={{
        position: "absolute",
        right: 72,
        top: 570,
        width: 466,
        height: 590,
        borderRadius: 32,
        background: C.ink,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 50,
        color: C.cream,
        boxShadow: "0 22px 50px #163f3b18",
      }}
    >
      <Icon kind="feet" size={180} color="#D8E7DD" />
      <div style={{ fontSize: 46, fontWeight: 700 }}>Đi lại nhẹ</div>
      <Chip>Vài phút cũng đáng thử</Chip>
    </Reveal>
    <Reveal
      delay={32}
      style={{
        position: "absolute",
        left: 72,
        top: 1230,
        fontSize: 36,
        color: C.muted,
      }}
    >
      Nhẹ nhàng. Dễ bắt đầu.
    </Reveal>
  </Paper>
);
