Quy tắc hiện hành: [voice-routing.md](voice-routing.md) — ElevenLabs Việt trước, HeyGen Việt sau; thay mặc định chỉ HeyGen và quy tắc cấm chuyển giữa hai provider trong tài liệu cũ.

# V2 trên Cloud

## Phạm vi

Cài skill trên Cloud là cài hướng dẫn và tài nguyên tham chiếu. Không phải chuyển toàn bộ runtime Windows, mã nguồn video, plugin Remotion hoặc âm thanh R4 lên máy chủ. Giữ chuẩn V2, không tự nângV3.

## Kiểm tra trước dựng

Xác nhận workspace ghi được, chạy được tiến trình, Node và trình quản lý gói khả dụng. Kiểm tra phiên bản các gói Remotion đồng nhất, browser headless và khả năng xử lý audio/MP4. Nếu runtime không khởi động, thử lại một lần theo lỗi cụ thể rồi báo blocker, không tiếp tục gọi đã dựng/render.

Kiểm tra network trước khi tải dependencies, font hoặc gửi TTS. Không dùng đường dẫnC:, file máy local, cachebrowserWindows hoặc phiên đăng nhập local làm yêu cầu bắt buộc. Không chứa API key, tài khoản, hoặc credential trong gói skill.

## Font

Tự chọn font theo [font-selection.md](font-selection.md). Kiểm font file, glyph tiếng Việt và render thực tế. Nếu font hiện tại không có hoặc thiếu dấu, tự thay bằng font có sẵn hợp lệ; không yêu cầu người dùng xác nhận tên font. Không tự lấy font Windows từ nguồn không rõ. Sau chọn kiểm wrapping, baseline, highlight và safe zone.

## Voice

Đầu vào ưu tiên audio đã duyệt; audio mới ưu tiên ElevenLabs Việt, tiếp theo HeyGen speech qua plugin nếu kết nối có capability. Đọc [quy trình HeyGen](heygen-voice.md). Không giả định plugin trên Windows cũng có trên Cloud. Edge TTS chỉ khi người dùng chọn trong phạm vi cho phép. Kế thừa authorization của session nếu đã rõ, không hỏi lại vô cớ. Nếu chưa được phép gửi script mới đến Edge TTS thì hỏi trước bước gửi. Nếu HeyGen/endpoint không khả dụng, báo rõ và dùng audio người dùng cung cấp nếu có; không tự chuyển sang provider khác ngoài thứ tự ElevenLabs → HeyGen được phép trong voice-routing.md.

## Khung tham chiếu

Đọc assets/reference-dark.jpeg và assets/reference-light.jpeg khi cần kiểm tra phong cách hoặc bố cục. Đây là khung R4Plus TikTokSafe có sẵn, không phải template giới hạn chủ đề ngân hàng. Áp dụng palette/typography/nhịp cho script mới. Các mốcUI chỉ là vùng tránh mô phỏng, kiểm tra đăng nháp thực tế.

## Hoàn tất

Phân biệt kết quả: skill đã tạo, skill đã cài trong tài khoản Cloud, runtime đã kiểm tra, video đã render. Chỉ khẳng định skill Cloud đã cài khi giao diện hoặc API trả về trạng thái lưu/cài và có thể gọi skill. FileZIP đính kèm chat chỉ là tài liệu đầu vào, chưa chứng minh skill đã cài vĩnh viễn.

## Tạo hình

Dùng imagegen built-in nếu khả dụng theo image-generation.md; skill hướng dẫn không tự cung cấp engine. Tạo asset riêng theo cảnh, kiểm trước khi tích hợp public/assets. Đọc schema đang có; không bịa tham số model/quality/size. Nếu unavailable không gọi SVG sơ sài là ảnh photoreal.

## Môi trường render hiện tại

Áp dụng [GitHub Actions](github-actions.md) cho render và khung QA; kiểm runtime renderer trong runner, không bắt Cloud chat hoặc Windows có renderer local. Cloud cần khả năng thao tác repository/workflow và đọc artifact. Không tự fallback local.
