import { interpolate, useCurrentFrame } from "remotion";
import { C, Paper, Eyebrow, Head, Photo, Icon, ease } from "./design";
export const R3Scene09 = () => {
  const f = useCurrentFrame();
  return (
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
        zoom={1.035}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(#163f3beb,#163f3b44 45%,#163f3be8)",
        }}
      />
      <Eyebrow number="09" label="BỮA ĂN TIẾP THEO" light />
      <Head light size={87}>
        Bữa ăn tới,
        <br />
        thử <span style={{ color: "#EAC69C" }}>đi bộ nhẹ.</span>
      </Head>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: C.cream,
          opacity: interpolate(f, [63, 86], [0, 1], ease),
        }}
      >
        <Eyebrow number="09" label="BẮT ĐẦU THẬT NHẸ NHÀNG" />
        <div
          style={{
            position: "absolute",
            top: 410,
            left: 72,
            right: 72,
            fontSize: 88,
            lineHeight: 1.15,
            fontWeight: 750,
            letterSpacing: -3,
          }}
        >
          Bữa ăn tới
          <br />
          <span style={{ color: C.green }}>→ Đi bộ nhẹ</span>
        </div>
        <div
          style={{
            position: "absolute",
            top: 820,
            left: 72,
            display: "flex",
            alignItems: "center",
            gap: 26,
          }}
        >
          <Icon kind="feet" size={100} />
          <span style={{ fontSize: 52, fontWeight: 650 }}>
            5–10 phút, nếu phù hợp
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            left: 72,
            top: 1060,
            fontSize: 35,
            color: C.muted,
          }}
        >
          Một thói quen nhỏ cho ngày của bạn.
        </div>
      </div>
    </Paper>
  );
};
