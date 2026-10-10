import { interpolate, useCurrentFrame } from "remotion";
import { C, Paper, Eyebrow, Head, Photo, Chip, ease } from "./design";
export const R3Scene01 = () => {
  const f = useCurrentFrame();
  return (
    <Paper>
      <Photo
        name="dining"
        style={{ position: "absolute", inset: 0 }}
        zoom={1.1}
      />
      <Photo
        name="walking"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 110,
          bottom: -110,
          opacity: interpolate(f, [70, 86], [0, 1], ease),
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg,rgba(22,63,59,.94),rgba(22,63,59,.55) 23%,transparent 43%,transparent 61%,rgba(22,63,59,.92) 85%)",
        }}
      />
      <Eyebrow number="01" label="SAU BỮA ĂN" light />
      <Head light size={96}>
        Ăn xong,
        <br />
        <span style={{ color: "#EAC69C" }}>đừng vội ngồi.</span>
      </Head>
      <Chip
        dark
        style={{
          position: "absolute",
          top: 1160,
          left: 72,
          opacity: interpolate(f, [84, 104], [0, 1], ease),
          background: C.cream,
          color: C.ink,
        }}
      >
        Thử đứng dậy → đi bộ nhẹ
      </Chip>
    </Paper>
  );
};
