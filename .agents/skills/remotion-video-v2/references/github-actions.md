# Dựng và kiểm tra bằng GitHub Actions

Theo chỉ dẫn dự án hiện tại của người dùng: mặc định repository https://github.com/trungtn288-ctrl/tao-video, thư mục remotion. Khi tạo/chỉnh video, đọc AGENTS.md và cấu hình workflow thực tế trước thực hiện.

- Chuẩn bị mã nguồn, asset và timing trong phạm vi yêu cầu; đưa thay đổi cần thiết lên repository, kích hoạt workflow GitHub Actions và theo dõi kết quả.
- Render MP4 và xuất khung QA bằng GitHub Actions. Không khởi động Remotion Studio hoặc render trên máy local trừ khi người dùng yêu cầu rõ ràng.
- Kiểm artifact thực: 1080×1920, 30fps, H.264/AAC, duration theo voice, decode toàn file và khung đủ mọi cảnh/mốc zoom/phụ đề/UI. Nghe/xem khi có khả năng; ghi bước chưa thực hiện.
- Trả liên kết tải MP4/artifact của run đã xác minh. Workflow báo thành công nhưng thiếu MP4 hoặc QA chưa chạy không tự là video hoàn tất.
- Nếu GitHub, quyền repository hoặc workflow không dùng được: báo nguyên nhân thực tế, giữ phần đã chuẩn bị; không tự chuyển sang render local. Không nhúng token vào skill/asset/log.
- Tác vụ cập nhật/đóng gói skill không tự yêu cầu push repository hoặc chạy render. Chỉ dẫn mới trực tiếp của người dùng có ưu tiên nếu thay đổi môi trường.
