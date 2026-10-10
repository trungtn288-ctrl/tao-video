import { C, Paper, Eyebrow, Head, Photo, Reveal, Icon } from "./design";
export const R3Scene05 = () => (
  <Paper>
    <Eyebrow number="05" label="THAY ĐỔI THÓI QUEN" />
    <Head size={79}>
      Đừng ngồi
      <br />
      bất động <span style={{ color: C.orange }}>quá lâu.</span>
    </Head>
    <Reveal
      delay={5}
      style={{
        position: "absolute",
        left: 72,
        top: 570,
        width: 438,
        height: 640,
        borderRadius: 30,
        overflow: "hidden",
      }}
    >
      <Photo name="sitting" style={{ width: "100%", height: "100%" }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(transparent 55%,#163f3bd9)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 30,
          bottom: 30,
          fontSize: 39,
          fontWeight: 650,
          color: C.cream,
        }}
      >
        Ngồi lâu
      </div>
    </Reveal>
    <Reveal
      delay={22}
      style={{
        position: "absolute",
        right: 72,
        top: 570,
        width: 468,
        height: 640,
        borderRadius: 30,
        overflow: "hidden",
      }}
    >
      <Photo name="walking" style={{ width: "100%", height: "100%" }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(transparent 55%,#163f3bd9)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 30,
          bottom: 30,
          fontSize: 39,
          fontWeight: 650,
          color: C.cream,
        }}
      >
        Đi lại nhẹ
      </div>
    </Reveal>
    <Reveal
      delay={34}
      style={{
        position: "absolute",
        left: 460,
        top: 830,
        width: 100,
        height: 100,
        borderRadius: "50%",
        background: C.cream,
        display: "grid",
        placeItems: "center",
      }}
    >
      <Icon kind="arrow" size={68} />
    </Reveal>
    <Reveal
      delay={42}
      style={{
        position: "absolute",
        left: 72,
        top: 1250,
        fontSize: 34,
        color: C.muted,
      }}
    >
      Sau ăn, thử thêm một chút vận động.
    </Reveal>
  </Paper>
);
