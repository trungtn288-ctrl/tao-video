import { C, Paper, Eyebrow, Head, Photo, Reveal, Icon } from "./design";
export const R3Scene07 = () => (
  <Paper>
    <Photo
      name="hero"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 110,
        bottom: -110,
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(#163f3bdc, #163f3b70 25%,transparent 42%,transparent 49%,#163f3bc9 68%,#163f3bf2 100%)",
      }}
    />
    <Eyebrow number="07" label="MỖI NGÀY MỘT CHÚT" light />
    <Head light size={88}>
      Thay đổi nhỏ.
      <br />
      <span style={{ color: "#EAC69C" }}>Thêm vận động.</span>
    </Head>
    <Reveal
      delay={40}
      style={{
        position: "absolute",
        left: 72,
        right: 72,
        top: 995,
        padding: "28px 34px",
        background: C.cream,
        borderRadius: 25,
        display: "flex",
        alignItems: "center",
        gap: 28,
      }}
    >
      <Icon kind="feet" size={70} />
      <div style={{ fontSize: 37, fontWeight: 650 }}>
        Thêm vận động mỗi ngày
      </div>
    </Reveal>
    <Reveal
      delay={110}
      style={{
        position: "absolute",
        left: 72,
        right: 72,
        top: 1125,
        padding: "28px 34px",
        background: "#D8E7DDF5",
        borderRadius: 25,
        display: "flex",
        alignItems: "center",
        gap: 28,
      }}
    >
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        stroke={C.green}
        strokeWidth="4"
      >
        <path d="M7 52 23 31 38 42 62 18M48 18h14v14" />
      </svg>
      <div style={{ fontSize: 34, fontWeight: 650, lineHeight: 1.3 }}>
        Có thể hỗ trợ kiểm soát
        <br />
        đường huyết sau ăn
      </div>
    </Reveal>
  </Paper>
);
