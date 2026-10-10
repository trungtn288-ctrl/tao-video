import { interpolate, useCurrentFrame } from "remotion";
import { C, Paper, Eyebrow, Head, Reveal, ease } from "./design";
export const R3Scene03 = () => {
  const f = useCurrentFrame();
  const p = interpolate(f, [75, 165], [0, 1], ease);
  return (
    <Paper>
      <Eyebrow number="03" label="CƠ THỂ SAU ĂN" />
      <Head size={78}>
        Đi bộ nhẹ có thể
        <br />
        giúp <span style={{ color: C.green }}>tăng ít hơn.</span>
      </Head>
      <Reveal
        delay={18}
        style={{
          position: "absolute",
          top: 485,
          left: 72,
          right: 72,
          fontSize: 34,
          color: C.muted,
        }}
      >
        Mức tăng đường huyết sau bữa ăn
      </Reveal>
      <div
        style={{
          position: "absolute",
          top: 590,
          left: 72,
          width: 936,
          height: 590,
          background: C.white,
          borderRadius: 36,
          boxShadow: "0 20px 60px #163f3b0a",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 45,
            padding: "38px 40px",
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <span style={{ color: "#BA8B70" }}>● Ngồi yên</span>
          <span style={{ color: C.green }}>● Đi bộ nhẹ</span>
        </div>
        <svg
          viewBox="0 0 900 390"
          style={{ width: 900, position: "absolute", left: 18, top: 140 }}
        >
          <path d="M55 320H840" stroke="#CDD7CF" strokeWidth="2" />
          <path
            d="M70 320C170 315 218 76 375 87S570 285 822 306"
            pathLength="1"
            stroke="#BA8B70"
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="1"
            strokeDashoffset={1 - p}
          />
          <path
            d="M70 320C195 312 255 194 389 206S586 313 822 314"
            pathLength="1"
            stroke={C.green}
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="1"
            strokeDashoffset={1 - p}
          />
        </svg>
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: 40,
            right: 40,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 27,
            color: C.muted,
          }}
        >
          <span>Sau bữa ăn</span>
          <span>Thời gian →</span>
        </div>
      </div>
      <Reveal
        delay={160}
        style={{
          position: "absolute",
          top: 1215,
          left: 72,
          right: 72,
          fontSize: 28,
          color: C.muted,
          lineHeight: 1.5,
        }}
      >
        Minh họa khái niệm · Không phải dữ liệu đo
        <br />
        Mức đáp ứng khác nhau ở mỗi người.
      </Reveal>
    </Paper>
  );
};
