---
name: remotion-video-v2
description: "Tạo và chỉnh video faceless bằng Remotion theo chuẩn V2 của AI Faceless Video Factory: hình ảnh giống thật theo 26 mục đã duyệt, tạo ảnh bằng imagegen, tự chọn giọng Việt ElevenLabs → HeyGen và font tiếng Việt, phụ đề đồng bộ và vùng tránh UI TikTok. Dùng khi gọi Remotion Video V2 hoặc yêu cầu dựng video theo chuẩn này."
---

# Remotion Video V2

Nâng cấp V2 ngày 11/10/2026 từ SKILL.zip và assets1.zip do người dùng cung cấp: chuẩn hình ảnh 26 mục, prompt và quy trình imagegen, tự chọn giọng Việt ElevenLabs → HeyGen và font tiếng Việt. Giữ tên skill V2; revision hướng dẫn `2026-10-11-elevenlabs-fonts`. Giữ bản cũ để đối chiếu trong [baseline](references/baseline-20261010/original-skill.md). Bản V2 trước cập nhật được giữ trong references/baseline-v2-20261010/. Các bản baseline chỉ là lịch sử, không là hướng dẫn runtime. Đọc [changelog](references/changelog.md).

## Đọc bắt buộc trước sản xuất

1. Đọc [chuẩn dựng V2](references/standard-v2.md) và [chuẩn hình ảnh đầy đủ 26 mục](references/visual-standard-26.md).
2. Đọc [tạo hình và prompt](references/image-generation.md), [thứ tự giọng Việt](references/voice-routing.md), [HeyGen dự phòng](references/heygen-voice.md), [tự chọn font](references/font-selection.md), [Cloud runtime](references/cloud-runtime.md).
3. Đọc Project Sources liên quan theo quy tắc dự án nếu đang thực hiện nhiệm vụ của AI Script Factory. Không dùng tài liệu skill hoặc Library để thay Project Sources. Không sửa các nguồn của dự án trong nhiệm vụ sản xuất.

Đọc [đúng đối tượng được nêu đích danh](references/named-subjects.md) khi script có tên riêng; ưu tiên hình thực tế đã xác minh trên mạng, hoặc tạo hình giữ đúng nhận diện. Khi dựng/render, áp dụng [GitHub Actions](references/github-actions.md); không render local hoặc mở Studio trừ khi người dùng yêu cầu rõ ràng.

## Quyết định mặc định

- Giữ nguyên 100% lời thoại đã duyệt; không rút gọn, thay claim, certainty, lợi ích hoặc payoff. Thiếu lời thoại cần hỏi lấy nội dung; duyệt skill không là duyệt một script mới.
- Dùng hình thật hoặc ảnh AI như ảnh chụp cho người, con vật, thực phẩm, đồ vật, bếp, kho và cảnh đời thực. Không dùng hình khối/SVG sơ sài thay tài nguyên chính. Dùng mã/vector cho chữ, sơ đồ, bảng, biểu đồ, bản đồ và giao diện cần chính xác.
- Dùng skill imagegen hiện có và công cụ tạo ảnh tích hợp để tạo bitmap. Skill này chứa các quy tắc cốt lõi để triển khai; không yêu cầu người dùng gọi imagegen riêng. Không tự chuyển sang API/CLI có key, mua tài nguyên, hoặc đổi provider khi công cụ không khả dụng.
- Chọn ảnh và sửa lỗi tài nguyên nội bộ trong phạm vi đã cho phép; không yêu cầu duyệt từng cảnh. Kiểm kết quả thật, không coi prompt hay ảnh đẹp đơn lẻ là QA video PASS.
- Audio mới ưu tiên ElevenLabs tiếng Việt, tiếp theo HeyGen tiếng Việt theo voice-routing.md; tự chọn giọng tương thích, không hỏi lại việc chuyển dự phòng đã được giao. Tái dùng audio đã duyệt khi chỉ sửa hình. Không tự mua credits hoặc clone giọng.
- Tự chọn font tiếng Việt hợp lệ đang có; kiểm glyph, dấu, wrapping, safe zone và render. Không yêu cầu xác nhận Segoe UI/DejaVu Sans/Noto Sans cho lựa chọn thông thường.
- Không mặc định gọi giọng là “phổ biến nhất” khi không có số liệu xếp hạng. Ưu tiên giọng phù hợp, rõ và tự nhiên; giữ nhất quán trong video.
- Xuất dọc 1080×1920, 30fps, H.264/AAC theo yêu cầu render. Giữ palette và hình học safe zone V2, điều chỉnh trong phạm vi bố cục để ảnh chính hấp dẫn và chữ đọc được. Không đóng khung chủ đề ngân hàng hoặc số cảnh/thời lượng R4.

## Thực hiện đến kết quả

Nhận script đã khóa → kiểm runtime → lập bảng lời/cảnh/đối tượng/hành động/nguồn/tính xác thực → chọn giọng và font → tạo/reuse audio → lập timing thực → chọn/tạo tài nguyên theo chuẩn26 → kiểm tài nguyên → dựng Remotion → xem đủ cảnh và mốc tương tác/zoom/UI mô phỏng → render → giải mã toàn file → nghe/xem thực tế khi có capability → sửa lỗi trong phạm vi → báo kết quả đúng bằng chứng.

Prompt và đường dẫn ảnh lịch sử nằm trong [danh mục 26 mẫu](references/image-prompts-26.json); Đã đóng gói đủ 26 ảnh mẫu: 01–12 từ assets1.zip mới và 13–26 từ assets2.zip. Đọc [tài nguyên đi kèm](references/asset-inventory.md); không giả đã xem hoặc tái tạo đúng ảnh mẫu gốc. Mẫu ảnh ngang có tiêu đề là tài liệu tham chiếu; video sản xuất phải tạo ảnh theo khung dọc và chèn chữ bằng Remotion. Không đưa nguyên banner “MINH HỌA CHUẨN HÌNH ẢNH” vào mọi video.

Lưu script, audio, voice metadata, prompt gốc và các chỉnh sửa, tài nguyên, nguồn/quyền, timeline, font path, mã nguồn, khung QA, MP4, metadata và báo cáo trong task. Chỉ sửa file tiến độ nếu hiện diện và được phép. Không tự đăng video.

## Hoàn tất và giới hạn

Ghi PASS/FAIL/NOT_RUN/UNAVAILABLE cùng bằng chứng cho kiểm ảnh, chữ/dấu, sync, giải mã, xem video và nghe audio. Thiếu khả năng xem/nghe ghi rõ; không gọi render thành công là publish-ready. Không có renderer hoặc image tool thì báo blocker đúng, giữ tài nguyên/mã đã làm; không bù bằng hình sơ sài.

Không hỏi lại việc chọn hình, giọng và font đã được giao. Chỉ hỏi khi thiếu nội dung bắt buộc, quyết định thật về chi phí/quyền/đổi phương pháp, hoặc thay lời đã khóa. Giữ các phiên bản chuẩn sau này theo quyết định người dùng; lỗi tài nguyên một clip không tự tạo V3.

Ví dụ: “Dùng $remotion-video-v2 dựng video từ lời thoại đã duyệt, giữ nguyên nội dung và xuất MP4.”
