export type SceneCopy = {
  readonly title: string;
  readonly voiceover: string;
  readonly onScreen: string;
  readonly mediaSlot: string;
};

export const fps = 30;
export const width = 1080;
export const height = 1920;

export const sceneDurations = {
  scene01: 150,
  scene02: 120,
  scene03: 300,
  scene04: 150,
  scene05: 150,
  scene06: 180,
  scene07: 240,
  scene08: 180,
  scene09: 120,
};

export const totalDuration =
  sceneDurations.scene01 +
  sceneDurations.scene02 +
  sceneDurations.scene03 +
  sceneDurations.scene04 +
  sceneDurations.scene05 +
  sceneDurations.scene06 +
  sceneDurations.scene07 +
  sceneDurations.scene08 +
  sceneDurations.scene09;

export const approvedScript = {
  title: "Sau khi ăn, đừng ngồi ngay — thử đi bộ 5–10 phút",
  scene01: {
    title: "SCENE 1 — HOOK",
    voiceover:
      "Sau khi ăn xong, nếu bạn thường ngồi xuống ngay, có một thay đổi rất nhỏ có thể đáng thử: đi bộ một đoạn ngắn.",
    onScreen: "Ăn xong → thử đi bộ một đoạn ngắn",
    mediaSlot: "PLACEHOLDER: dining table, sofa, gentle walking transition",
  },
  scene02: {
    title: "SCENE 2 — RE-HOOK",
    voiceover:
      "Điều thú vị là bạn không nhất thiết phải tập một buổi thể dục dài.",
    onScreen: "Không cần một buổi tập dài",
    mediaSlot: "PLACEHOLDER: intense workout contrast to easy walking",
  },
  scene03: {
    title: "SCENE 3 — DISCOVERY",
    voiceover:
      "Các nghiên cứu cho thấy những khoảng vận động ngắn sau ăn, đặc biệt là đi bộ, có thể giúp giảm mức tăng đường huyết sau bữa ăn so với việc ngồi yên.",
    onScreen: "Vận động sau ăn → giảm mức tăng đường huyết",
    mediaSlot: "PLACEHOLDER: qualitative post-meal glucose trend diagram",
  },
  scene04: {
    title: "SCENE 4 — EVIDENCE",
    voiceover:
      "Một phân tích gộp năm 2026 tổng hợp 39 nghiên cứu cũng cho kết quả tương tự.",
    onScreen: "Phân tích gộp 2026: 39 nghiên cứu",
    mediaSlot: "PLACEHOLDER: studies converging into simple chart",
  },
  scene05: {
    title: "SCENE 5 — DISCOVERY 2",
    voiceover:
      "Một nghiên cứu khác cho thấy đi bộ ngay sau khi ăn có hiệu quả tốt hơn đối với đường huyết sau ăn so với không vận động.",
    onScreen: "Đi bộ sau ăn > ngồi yên",
    mediaSlot: "PLACEHOLDER: side-by-side sitting versus walking after eating",
  },
  scene06: {
    title: "SCENE 6 — ACTION",
    voiceover:
      "Sau bữa ăn, thay vì ngồi liên tục, bạn có thể đi bộ nhẹ khoảng 5–10 phút nếu điều kiện cho phép.\n\nKhông cần biến nó thành một buổi tập nặng.",
    onScreen: "5–10 phút đi bộ nhẹ",
    mediaSlot: "PLACEHOLDER: 5 to 10 minute clock and easy walking",
  },
  scene07: {
    title: "SCENE 7 — PAYOFF",
    voiceover:
      "Điều bạn nhận được là một cách rất đơn giản để giảm mức tăng đường huyết sau bữa ăn, đồng thời thêm vận động vào một khoảng thời gian vốn thường bị bỏ qua.",
    onScreen: "Một thay đổi nhỏ — thêm vận động vào ngày của bạn",
    mediaSlot: "PLACEHOLDER: relaxed post-meal walk and health icons",
  },
  scene08: {
    title: "SCENE 8 — SAFETY CAVEAT",
    voiceover:
      "Nếu bạn đang dùng thuốc hạ đường huyết hoặc insulin, đặc biệt nếu từng bị hạ đường huyết khi vận động, nên trao đổi với nhân viên y tế để biết cách vận động phù hợp.",
    onScreen:
      "Đang dùng thuốc hạ đường huyết/insulin? Hãy hỏi nhân viên y tế.",
    mediaSlot: "PLACEHOLDER: medication icon and healthcare conversation",
  },
  scene09: {
    title: "SCENE 9 — CTA",
    voiceover:
      "Sau bữa ăn tiếp theo, thử đứng dậy và đi bộ nhẹ vài phút thay vì ngồi ngay.",
    onScreen: "Sau bữa ăn tiếp theo: đứng dậy → đi bộ nhẹ vài phút",
    mediaSlot: "PLACEHOLDER: stand up from table and walk gently",
  },
};
