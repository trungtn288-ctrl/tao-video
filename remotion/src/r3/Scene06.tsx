import { interpolate, useCurrentFrame } from "remotion";
import { C, Paper, Eyebrow, Head, Photo, Pop, ease } from "./design";
export const R3Scene06 = () => {
  const f = useCurrentFrame();
  return (
    <Paper>
      <Photo
        name="feet"
        style={{ position: "absolute", inset: 0 }}
        zoom={1.08}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(#163f3bea,#163f3b85 30%,#163f3b20 58%,#163f3bdd 90%)",
        }}
      />
      <Eyebrow number="06" label="THỬ MỘT BƯỚC NHỎ" light />
      <Head light size={79}>
        Nếu phù hợp với bạn,
        <br />
        hãy <span style={{ color: "#EAC69C" }}>đi bộ nhẹ.</span>
      </Head>
      <Pop
        delay={22}
        style={{
          position: "absolute",
          left: 210,
          top: 600,
          width: 660,
          height: 660,
          borderRadius: "50%",
          background: "#F4F1E9ED",
          boxShadow: "0 28px 80px #00000022",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <svg
          viewBox="0 0 660 660"
          style={{ position: "absolute", inset: 0, width: 660 }}
        >
          <circle
            cx="330"
            cy="330"
            r="300"
            fill="none"
            stroke="#D8E7DD"
            strokeWidth="9"
          />
          <circle
            cx="330"
            cy="330"
            r="300"
            fill="none"
            stroke={C.green}
            strokeWidth="10"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={1 - interpolate(f, [28, 135], [0, 0.78], ease)}
            strokeLinecap="round"
            transform="rotate(-90 330 330)"
          />
        </svg>
        <div style={{ fontSize: 132, fontWeight: 750, letterSpacing: -6 }}>
          5–10
        </div>
        <div style={{ fontSize: 46, fontWeight: 650, letterSpacing: 7 }}>
          PHÚT
        </div>
        <div style={{ fontSize: 30, color: C.muted, marginTop: 34 }}>
          Thong thả · Không cần tập nặng
        </div>
      </Pop>
      <div
        style={{
          position: "absolute",
          top: 1290,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 26,
          color: C.cream,
        }}
      >
        Đồng hồ minh họa
      </div>
    </Paper>
  );
};
