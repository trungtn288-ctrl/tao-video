# Changelog

## V2 — 10/10/2026

- Nguồn: remotion-video-v1.zip do người dùng cung cấp.
- Người dùng yêu cầu lưu thành skill Remotion Video V2 trên Git.
- Đổi tên skill, metadata giao diện, cách gọi và reference chuẩn thành V2.
- Giữ nguyên chuẩn hình, typography, TikTok safe zones, phụ đề và HeyGen speech; giữ nguyên hai ảnh tham chiếu.
- Tích hợp hướng dẫn AGENTS.md của repo: chỉnh source trên Cloud, render và kiểm tra khung hình bằng GitHub Actions.
- Kiểm tra: cấu trúc gói, đường dẫn liên kết và ảnh tham chiếu. Không tạo voice hoặc render video trong lần đóng gói này.

## V2 revision 2026-10-11-elevenlabs-fonts — 11/10/2026

- Theo yêu cầu nâng cấp V2 từ SKILL.zip và assets1.zip; giữ tên gọi $remotion-video-v2.
- Thêm chuẩn hình ảnh 26 mục, imagegen prompt/helper, nhận diện đối tượng đích danh và các cổng kiểm A–E.
- Audio mới ưu tiên ElevenLabs Việt, HeyGen Việt dự phòng; tự chọn giọng tương thích, không tạo voice test khi cài skill.
- Tự chọn font đủ glyph; đóng gói Noto Sans variable/OFL và helper kiểm NFC/NFD.
- Giữ output dọc, palette, TikTok safe zones, khóa lời thoại và GitHub Actions.
- Lưu baseline V2 trước cập nhật và baseline V1 từ đầu vào để đối chiếu.
- 26 ảnh mẫu không được cung cấp; ghi NOT_INCLUDED trong catalog, giữ đầy đủ prompt và tiêu chí QA.
- Chỉ kiểm package/helpers/glyph preflight; chưa tạo speech, hình mới hoặc render video, không tuyên bố QA nghe/xem đã đạt.

### Bổ sung assets2.zip — 11/10/2026

- Thêm 14 ảnh gốc WebP số 13–26 vào assets/visual-reference-26/, giữ nguyên byte.
- Cập nhật catalog, hướng dẫn và inventory theo file thật; 01–12 vẫn NOT_INCLUDED.
- Kiểm giải mã 14 ảnh 1536×1024 và xem contact sheet để đối chiếu số mục; không khẳng định toàn bộ chữ/chi tiết ảnh hoặc video đã QA.
- Font/license/icon/hai ảnh bố cục trùng bản đã đóng gói, không thay đổi voice, font, chuẩn hoặc quy trình.

### Hoàn thiện bộ 26 ảnh — 11/10/2026

- assets1.zip mới bổ sung 12 ảnh WebP 01–12, giữ nguyên byte trong assets/visual-reference-26/.
- Catalog và inventory hiện có đủ 26 ảnh INCLUDED, không còn đường dẫn ảnh thiếu.
- Giải mã 12 ảnh mới và đối chiếu số mục bằng contact sheet. Giữ nguyên chuẩn, voice, font và quy trình; không tuyên bố đã QA video.

## V2 revision 2026-10-11-expressive-voice — 11/10/2026

- Người dùng yêu cầu nâng cấp skill cho mọi video sau, không sửa video đang xem. Giữ tên V2 và chuẩn hình đã duyệt.
- Thêm voice-performance.md: delivery plan trước TTS; chọn giọng Việt có năng lượng/diễn cảm; mở nhanh, nhịp gọn, biến đổi cảm xúc và nhấn đúng ý, cao trào phù hợp nội dung.
- QA phải nghe narration và mix thực tế, ghi timestamp/evidence cho năng lượng, cảm xúc, nhấn nhá, nhịp, clarity/integrity và sync; không dùng tăng tốc, tags hoặc render success làm bằng chứng PASS.
- Không tự in câu lệnh DAILY/KEYWORD/TREND/keyword thành banner hoặc branding.
- Đồng bộ entrypoint, routing, standard, metadata và repo instructions. Bản trước cập nhật giữ trong Git history.
- Chỉ kiểm cấu trúc/liên kết và nội dung hướng dẫn; không tạo speech hoặc render lại video cho lần nâng cấp skill này.
