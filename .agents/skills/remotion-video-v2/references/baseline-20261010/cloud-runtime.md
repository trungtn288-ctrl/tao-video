# V1 trên Cloud

## Phạm vi

Cài skill trên Cloud là cài hướng dẫn và tài nguyên tham chiếu. Không phải chuyển toàn bộ runtime Windows, mã nguồn video, plugin Remotion hoặc âm thanh R4 lên máy chủ. Giữ chuẩn V1, không tự nângV2.

## Kiểm tra trước dựng

Xác nhận workspace ghi được, chạy được tiến trình, Node và trình quản lý gói khả dụng. Kiểm tra phiên bản các gói Remotion đồng nhất, browser headless và khả năng xử lý audio/MP4. Nếu runtime không khởi động, thử lại một lần theo lỗi cụ thể rồi báo blocker, không tiếp tục gọi đã dựng/render.

Kiểm tra network trước khi tải dependencies, font hoặc gửi TTS. Không dùng đường dẫnC:, file máy local, cachebrowserWindows hoặc phiên đăng nhập local làm yêu cầu bắt buộc. Không chứa API key, tài khoản, hoặc credential trong gói skill.

## Font

V1 dùng Segoe UI nhưng gói không phân phối font Windows. Kiểm tra font đã cài và glyph tiếng Việt. Nếu Cloud thiếu font, có thể dùng font do người dùng cung cấp hợp lệ. Nếu cần font thay thế, trình bày tên và ảnh hưởng bố cục, xin quyết định vì thay đổi font chuẩn. Không tự tải font Segoe UI từ nguồn không rõ. Sau chọn font, kiểm tra lại text wrapping và safe zone.

## Voice

Đầu vào ưu tiên audio đã duyệt; audio mới dùng HeyGen speech qua plugin nếu kết nối có capability. Đọc [quy trình HeyGen](heygen-voice.md). Không giả định plugin trên Windows cũng có trên Cloud. Edge TTS chỉ khi người dùng chọn trong phạm vi cho phép. Kế thừa authorization của session nếu đã rõ, không hỏi lại vô cớ. Nếu chưa được phép gửi script mới đến Edge TTS thì hỏi trước bước gửi. Nếu HeyGen/endpoint không khả dụng, báo rõ và dùng audio người dùng cung cấp nếu có; không tự chuyển provider hoặc API trả phí.

## Khung tham chiếu

Đọc assets/reference-dark.jpeg và assets/reference-light.jpeg khi cần kiểm tra phong cách hoặc bố cục. Đây là khung R4Plus TikTokSafe có sẵn, không phải template giới hạn chủ đề ngân hàng. Áp dụng palette/typography/nhịp cho script mới. Các mốcUI chỉ là vùng tránh mô phỏng, kiểm tra đăng nháp thực tế.

## Hoàn tất

Phân biệt kết quả: skill đã tạo, skill đã cài trong tài khoản Cloud, runtime đã kiểm tra, video đã render. Chỉ khẳng định skill Cloud đã cài khi giao diện hoặc API trả về trạng thái lưu/cài và có thể gọi skill. FileZIP đính kèm chat chỉ là tài liệu đầu vào, chưa chứng minh skill đã cài vĩnh viễn.
