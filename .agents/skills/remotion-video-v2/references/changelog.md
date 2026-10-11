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
