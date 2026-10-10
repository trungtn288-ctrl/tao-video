# Remotion trên GitHub

Render video chạy trên GitHub Actions, không cần mở Studio hoặc render trên máy cá nhân.

1. Mở https://github.com/trungtn288-ctrl/tao-video/actions/workflows/render-video.yml.
2. Chọn **Run workflow**, nhánh `main`.
3. Nhập composition: `MealWalkKnowledgeR3` (video hiện có), `MealWalkShort`, hoặc một scene ID trong `src/Root.tsx`.
4. Khi job hoàn tất, tải `remotion-video-…` trong **Artifacts** và giải nén để lấy `video.mp4`.

Workflow chỉ chạy khi được kích hoạt thủ công. File kết quả được giữ 14 ngày. Thời gian chạy tính vào hạn mức GitHub Actions của tài khoản.

Để cập nhật video, sửa mã trong `remotion/src/` và đưa ảnh/âm thanh vào `remotion/public/`, commit lên GitHub rồi chạy workflow. Workflow dùng ảnh và âm thanh đã có; chưa tự tạo lời thoại mới qua HeyGen. Font trên Linux có thể khác bản Windows.

Thư mục này độc lập với registry Script Factory ở gốc repository.

Hướng dẫn Remotion: https://www.remotion.dev/docs/ssr#render-using-github-actions
