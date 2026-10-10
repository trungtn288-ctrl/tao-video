import { C, Paper, Eyebrow, Head, Icon, Reveal } from "./design";
export const R3Scene04 = () => (
  <Paper>
    <Eyebrow number="04" label="GÓC NHÌN NGHIÊN CỨU" />
    <Head size={79}>
      Vận động nhẹ
      <br />
      <span style={{ color: C.green }}>sau bữa ăn.</span>
    </Head>
    <Reveal
      delay={12}
      style={{
        position: "absolute",
        left: 90,
        top: 595,
        width: 740,
        height: 445,
        borderRadius: 26,
        background: "#D8DFD3",
        rotate: "-5deg",
        border: "1px solid #BFCDBF",
      }}
    />
    <Reveal
      delay={22}
      style={{
        position: "absolute",
        left: 200,
        top: 680,
        width: 740,
        height: 445,
        borderRadius: 26,
        background: "#E1D6C4",
        rotate: "4deg",
        border: "1px solid #CDBFA9",
      }}
    />
    <Reveal
      delay={32}
      style={{
        position: "absolute",
        left: 120,
        right: 120,
        top: 620,
        height: 540,
        padding: 50,
        borderRadius: 28,
        background: C.white,
        boxShadow: "0 22px 55px #163f3b16",
      }}
    >
      <Icon kind="paper" size={105} />
      <div
        style={{
          fontSize: 48,
          fontWeight: 700,
          marginTop: 30,
          lineHeight: 1.2,
        }}
      >
        Đã được xem xét
        <br />
        trong nhiều nghiên cứu
      </div>
      <div style={{ height: 2, background: C.mint, marginTop: 32 }} />
      <div style={{ fontSize: 31, color: C.muted, marginTop: 30 }}>
        Gợi ý lợi ích · Không phải lời bảo đảm
      </div>
    </Reveal>
    <Reveal
      delay={52}
      style={{
        position: "absolute",
        left: 72,
        top: 1230,
        fontSize: 31,
        color: C.muted,
      }}
    >
      Bắt đầu từ một thói quen phù hợp với bạn.
    </Reveal>
  </Paper>
);
