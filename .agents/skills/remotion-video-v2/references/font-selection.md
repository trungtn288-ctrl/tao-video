# Tự chọn font tiếng Việt

Người dùng cho phép tự chọn ngày10/10/2026; không hỏi xác nhận tên font cho mỗi video.

1. Giữ font trong task/channel nếu file thật tồn tại, hỗ trợ đầy đủ script và phù hợp readability. Audio/visual revisions dùng cùng font nếu đạt.
2. Khi thiếu hoặc lỗi dấu: tự chọn font sans có sẵn hợp lệ; thứ tự khởi đầu Noto Sans → DejaVu Sans → Segoe UI → font khác đã kiểm. Segoe UI chỉ khi có file hợp lệ, không tự tải font Windows không rõ nguồn.
3. Kiểm NFC và NFD/combining marks cho mọi chữ của script, tiêu đề, nguồn và metadata onscreen. Kiểm các mẫu `Tiếng Việt: Ă Â Đ Ê Ô Ơ Ư ă â đ ê ô ơ ư; Nguyễn, bảo quản, tủ lạnh, sức khỏe; ắ ằ ẳ ẵ ặ ấ ầ ẩ ẫ ậ ế ề ể ễ ệ ố ồ ổỗ ộ ớ ờ ở ỡ ợ ứ ừ ử ữ ự`.
4. Tải font explicit từ file vào renderer (FontFace/CSS @font-face hoặc loader Remotion phù hợp). Chờ font ready trước render, không dùng font-family name rồi giả đã load. Đóng gói font khi license cho phép; lưu tên/path/weight/license.
5. Kiểm glyph cmap chỉ là preflight. Xem ảnh render thật để kiểm dấu rơi/cắt, ô vuông, fallback, bold/regular, wrapping, karaoke highlight và safe zone. Hai dòng phụ đề tối đa theo V2; không bỏ lời để vừa.
6. Khi không font nào đạt, báo blocker cụ thể; không đổi chữ Việt thành không dấu.

Helper `scripts/select_vietnamese_font.py --text-file approved-script.txt` xuất JSON path/font name hoặc exit lỗi. Có thể truyền `--candidate /path/font.ttf` nhiều lần theo thứ tự ưu tiên; helper kiểm regular glyph thôi, kiểm render/weights vẫn bắt buộc. Helper không tải font, không cần API key.

Helper cần Python và thư viện `fonttools`. Thiếu thư viện trả DEPENDENCY_UNAVAILABLE, không phải font FAIL hay QA PASS; dùng runtime đã có thư viện hoặc kiểm glyph/render bằng công cụ khác khả dụng. Không tự tải phụ thuộc nếu quyền mạng/chi phí không cho phép.

## Bộ font đi kèm và cổng kiểm bắt buộc

assets/fonts/NotoSans-VF.ttf là font variable chính thức Google Fonts, kèm OFL.txt; trục weight cho Regular400, Medium500, SemiBold600, Bold700, ExtraBold800 và width. Dùng file đi kèm làm fallback đầu tiên trong mọi môi trường, không phụ thuộc font Windows. Helper tự kiểm font đi kèm khi không truyền candidate.

Đủ font nghĩa là đủ glyph của TOÀN BỘ script, title, caption, nguồn, CTA, tên riêng và mọi weight/style thực sự sử dụng. Không giới hạn ở mẫu tiếng Việt; ký tự ngôn ngữ khác cần thêm font có giấy phép hoặc báo thiếu. Không giả italic nếu thiết kế cần italic thực. NFC/NFD được kiểm, không sửa lời người dùng.

Load font explicit vào runner GitHub Actions, chờ fonts.ready; khai báo font-weight 100 900 cho variable font và kiểm weight cần dùng. Chỉ tiếp tục render toàn bộ sau khi glyph, font load, wrapping, dấu, karaoke và safe zone đạt trên khung QA. Font file tồn tại không chứng minh typography QA. dependencies: scripts/requirements.txt; cài trong môi trường được phép, không đóng gói thư viện Python thay renderer.
