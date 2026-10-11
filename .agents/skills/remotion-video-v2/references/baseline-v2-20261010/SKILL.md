---
name: remotion-video-v2
description: "Tạo hoặc chỉnh video faceless bằng Remotion theo chuẩn V2 của AI Faceless Video Factory, kế thừa R3/R4Plus với lồng tiếng HeyGen, hoạt cảnh sinh động, phụ đề Việt và bố cục tránh giao diện TikTok. Dùng khi người dùng gọi Remotion V2 hoặc muốn video theo chuẩn này."
---

# Remotion Video V2

Chuẩn sản xuất do người dùng xác nhận ngày09/10/2026. Khi áp dụng, đọc [chuẩn V2](references/standard-v2.md). Đây là chuẩn video, không phải yêu cầu tạo PowerPoint.

Trước khi dựng trong Cloud, đọc [khả năng môi trường](references/cloud-runtime.md). Skill lưu hướng dẫn sản xuất, không tự cung cấp renderer hoặc tài nguyên của video khác. Các hình trong assets là tham chiếu bố cục, không phải script mới hay dữ liệu cần sao chép.

## Quyết định chính

- Giữ nguyên100% script đã khóa. Phân cảnh và thời lượng theo script/voice mới, không mặc định9cảnh hoặc68giây như ví dụ R4.
- Knowledge Motion Design premium: sinh động, cao trào rõ, vẫn dễ đọc. Màu nền navy/kem thay theo ý nghĩa nội dung. Segoe UI, phụ đề42px tô sáng từ đang đọc.
- Xuất dọc1080×1920,30fps khi người dùng yêu cầu render. Tiêu đề, số liệu, nguồn, phụ đề và CTA tránh thanh tìm kiếm trên, thông tin kênh/mô tả dưới và nút bên phải TikTok. Nền phủ toàn khung.
- Mockup thao tác, counter có nguồn, sơ đồ động, checklist và zoom theo lời đọc. Không cần nhân vật chuyển động mặc định.
- Audio mới mặc định dùng HeyGen speech qua plugin kết nối; đọc [quy trình lồng tiếng HeyGen](references/heygen-voice.md). Tái sử dụng audio đã duyệt khi chỉ sửa hình. Hoài My/Edge TTS là lựa chọn cũ, chỉ dùng khi người dùng chọn; không tự fallback. Skill không cấp quyền mua dịch vụ hoặc clone giọng.
- HeyGen speech được dùng trong yêu cầu tạo lồng tiếng/video đã được cho phép; không tự mua credits/gói dịch vụ, dùng API key riêng hoặc dùng dịch vụ khác. Trong repo này, dùng GitHub theo AGENTS.md của dự án; render và kiểm tra khung hình trên GitHub Actions.
- Tôn trọng roadmap MPT và read-only sources của dự án nếu có. Remotion là nhiệm vụ sản xuất riêng theo yêu cầu người dùng.

## Thực hiện

Đọc script, xác định phần đã khóa và nguồn dữ liệu. Nếu thiếu script thì hỏi người dùng cung cấp, không lấy lại script SIMO làm nội dung mới. Lập visual/timing theo voice rồi dựng theo chuẩn. Dùng các skill Remotion có sẵn nếu môi trường cung cấp, không giả định có plugin hoặc Node/renderer trong mọi môi trường.

Nếu đang ở dự án gốc, đọc03_PROGRESS.md để tránh làm lại việc đã xong. Có thể tham khảo r4-video/src-safe và video R4Plus TikTokSafe nếu các file thực sự hiện diện. Ở dự án khác, áp dụng hướng dẫn trong skill, không phụ thuộc đường dẫnC: hoặc yêu cầu người dùng có video R4.

Kiểm tra nguyên văn script/captions, đủ cảnh, góc zoom và mốc chuyển bố cục. Chồng UI mô phỏng để kiểm tra rồi bỏ lớp này khi xuất. Giải mã toàn MP4, kiểm tra định dạng và nghe/xem toàn bộ. Báo chính xác bước chưa thực hiện. Mốc vùng tránh theo ảnh người dùng, cần đăng nháp để kiểm tra thiết bị thực tế.

Nếu runtime không hỗ trợ render, giữ mã nguồn/tài nguyên và nêu đúng giới hạn. Không gọi tài liệu hoặc preview là videoMP4 đã render.

## Phiên bản

Remotion Video V2 được tạo ngày 10/10/2026 theo yêu cầu người dùng từ ZIP remotion-video-v1.zip và lưu trong Git để các phiên Cloud của repo đọc được. V2 kế thừa toàn bộ chuẩn hình, safe zone, phụ đề và HeyGen voice của V1; chưa có thay đổi chất lượng sản xuất hoặc kết quả test voice mới.

Đọc [changelog](references/changelog.md). Các lần sửa video không tự tăng phiên bản chuẩn. Chỉ tạo V3 khi người dùng yêu cầu hoặc xác nhận nâng chuẩn; không ghi đè skill V1 nếu có.

## Ví dụ gọi

“Dùng $remotion-video-v2 tạo video với script đính kèm, giữ nguyên lời thoại và renderMP4.”

“Dùng $remotion-video-v2 kiểm tra bố cục TikTok cho video hiện tại.”
