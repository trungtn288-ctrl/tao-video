Quy tắc hiện hành: [voice-routing.md](voice-routing.md) — ElevenLabs Việt trước, HeyGen Việt sau; thay mặc định chỉ HeyGen và quy tắc cấm chuyển giữa hai provider trong tài liệu cũ.

# REMOTION STANDARD V2

Ngày chuẩn hóa: 09/10/2026. Chuẩn hiện tại theo yêu cầu người dùng, dựa trên R3, R4Plus và R4Plus TikTokSafe. Phạm vi: video faceless Knowledge Motion Design. Không thay đổi architecture, phase hoặc roadmap MPT.

## Cách dùng

Khi người dùng nói “dùng Remotion V2” hoặc gọi skill remotion-video-v2, đọc tài liệu này trong gói skill và nhận script mới. Skill đã cài có sẵn reference này, không yêu cầu đính kèm lại mỗi lần. Không mặc định có sẵn lịch sử hoặc file của video local.

Yêu cầu mẫu: “Tạo video theo Remotion V2 với script đính kèm. Giữ nguyên lời thoại đã khóa. Chữ tránh giao diện TikTok. Dựng sinh động, cao trào rõ, vẫn dễ đọc. Xuất MP4 1080×1920, 30fps và kiểm tra chất lượng.”

## Quyết định cố định

- Giữ nguyên lời thoại khi người dùng khóa script. Không tự rút gọn, viết lại hoặc sửa ý. Nếu phát hiện vấn đề dữ liệu trong script đã khóa, nêu vấn đề trước khi thay đổi.
- Thiết kế premium, rõ ràng, có hoạt cảnh gắn với nội dung. Không cần chuyển động thực của nhân vật mặc định.
- Tự chọn font tiếng Việt theo [quy tắc font](font-selection.md). Giữ font hiện tại nếu đạt; khi thiếu tự chọn font hợp lệ khác và kiểm wrapping/safe zone, không hỏi lại.
- Khung video dọc1080×1920,30fps. Đầu ra MP4 H.264/AAC khi người dùng yêu cầu render.
- Không in câu lệnh/DAILY/KEYWORD/TREND/keyword đầu vào thành banner hoặc tên kênh. Chỉ hiện tiêu đề nội dung, nhãn có ích; series/thương hiệu phải do người dùng xác định hoặc yêu cầu.
- Tiêu đề, phụ đề, số liệu, nguồn và CTA tránh UI TikTok. Nền và trang trí phủ toàn màn hình.
- Audio mới ưu tiên ElevenLabs tiếng Việt, rồi HeyGen tiếng Việt theo [voice-routing.md](voice-routing.md); không tự mua credits/gói, dùng API key riêng hoặc dùng dịch vụ khác. Dựng, render và kiểm khung bằng GitHub Actions tại repository trungtn288-ctrl/tao-video, thư mục remotion theo [quy trình](github-actions.md). Không mở Studio hoặc render local trừ khi người dùng yêu cầu rõ ràng.

## Màu sắc

Navy #071B2A là nền chính cho tình huống, cảnh báo, dữ liệu và kết. Kem #F4F1E9 cho phần giải thích, giới hạn và hướng dẫn. Ink #163F3B cho chữ trên nền sáng. White #F9FAF7 cho chữ nền tối. Cyan #55D7DD cho điểm nhấn thông tin. Amber #F4BD70 cho điểm nhấn và từ đang đọc. Muted #ABC0CA cho thông tin phụ nền tối. Red #F18C76 cho cảnh báo khi cần.

Đổi nền theo ý nghĩa từng phần, giữ chuyển cảnh mượt và màu nhấn nhất quán. Không bắt buộc video nào cũng đổi nền ở giữa, không đổi ngẫu nhiên để tạo chuyển động.

## Bố cục TikTok hiện tại

Mốc trên canvas1080×1920: tiến độ y235, nhãn cảnh y250. Nội dung chính bắt đầu y320. Khung thiết kế rộng924px, cao1100px được scale0,82 từ góc trên trái tại x72, tạo vùng nội dung khoảng x72–830, y320–1222. Tiêu đề cơ sở86px tương đương khoảng70,5px sau scale. Tùy cảnh có cỡ riêng.

Phụ đề x72–890,y1240,cỡ42px,line-height1,38,padding20px24px,nền #12312FF0,bo góc24px. Chú thích giao diện y1430,cỡ20px. Nguồn trong cảnh3/4 có cỡ cơ sở23px, khoảng18,9px sau scale. Chữ nguồn cần đọc được khi xem điện thoại, có thể điều chỉnh trong phạm vi layout của từng video.

QA mô phỏng vùng che: trên y0–225, dưới y1490–1920, phải x920–1080 từ y820. Đây là mốc theo ảnh người dùng, không phải thông số chính thức của TikTok. Kiểm tra đăng nháp trên thiết bị thực tế, nhất là mô tả dài. Giữ hoạt cảnh/zoom trong vùng an toàn ở mọi mốc, không chỉ khung cuối.

## Phụ đề

Tô sáng từ đang đọc màuamber, chữ còn lại màucream. Mốc phụ đề theo audio thực tế. Chia đoạn theo nghĩa, ưu tiên tối đa2dòng; khi tràn thì điều chỉnh chia đoạn hoặc bố cục. Không bỏ từ hoặc thay lời. Đối chiếu toàn script với chuỗi từ phụ đề. Đặt phụ đề tách khỏi mockup, biểu đồ, nguồn và CTA.

## Hoạt cảnh và nhịp

Thao tác mockup: nhập, chạm, bật thông báo, dừng và xác nhận. Sơ đồ: đường nối, nhánh quyết định, điểm nhấn theo lời đọc. Dữ liệu: counter có điểm kết đúng số, nhãn và đơn vị. Checklist hiện theo từng bước. Zoom làm rõ đối tượng quan trọng. Không tạo biểu đồ giả khi thiếu dữ liệu.

Mục tiêu thay đổi thông tin hoặc bố cục có ý nghĩa khoảng2–3giây khi phù hợp. Mở đầu vào thẳng vấn đề. Tăng cường độ tại cảnh báo/phát hiện/số liệu, hạ cường độ khi giải thích giới hạn, nhấn hành động cuối. Chuyển cảnh cơ sở8frames ở30fps, khoảng0,27giây; giữ mốc narration khi chỉ đổi bố cục.

## Voice, nhạc và SFX

Audio mới ưu tiên ElevenLabs Việt, sau đó HeyGen Việt theo [thứ tự provider](voice-routing.md). Áp dụng bắt buộc [diễn xuất và QA giọng đọc](voice-performance.md): kịch tính, hấp dẫn, có năng lượng/cảm xúc, nhịp nhanh và nhấn nhá phù hợp từng ý; không đọc chậm, đều, ru ngủ làm mặc định. Giữ audio đã duyệt khi chỉ sửa hình. Lập delivery plan trước TTS, giữ nguyên lời thoại, căn timing theo audio thật; không khóa tốc độ R4 hoặc dùng tăng tốc đơn thuần để thay diễn xuất.

Nhạc nhẹ dưới voice, có đường cường độ theo nội dung. SFX ngắn ở điểm cảnh báo, xác nhận hoặc chuyển ý. Kiểm tra bằng nghe toàn bộ, không chỉ đo đỉnh âm lượng. Kết quả R4Plus tham chiếu: mean -22,1dBFS,peak -6,4dBFS, không phải chuẩn âm lượng bắt buộc cho mọi video.

## Nội dung thay đổi theo video

Chủ đề, lời thoại, số cảnh, thời lượng, visual, nguồn, ngày dữ liệu và metadata phụ thuộc script. R4 có9cảnh và khoảng68giây, không khóa các con số đó vào V2. Không ép script mới có9cảnh hoặc rút thời lượng làm mất nội dung. Metadata theo nền tảng và video mới, không sao chép metadata ngân hàng cho chủ đề khác.

Nguồn đi cùng thông tin có thể kiểm chứng. Số liệu có đủ ý nghĩa và đơn vị. Nếu chưa có nguồn sơ cấp thì ghi chính xác nguồn thứ cấp dẫn lại. Ví dụ R4: giá trị giao dịch nghi ngờ đã dừng/hủy sau cảnh báo, không quy thành tiền lừa đảo xác nhận hoặc tiền thu hồi.

## Quy trình sản xuất

1. Đọc phiên bản chuẩn và script mới. Chỉ đọc03_PROGRESS.md nếu file có trong dự án hiện tại. Xác định script đã khóa hay còn được sửa.
2. Kiểm tra nguồn, chia cảnh theo nghĩa và lập visual theo nhịp voice.
3. Lập VOICE_DELIVERY_PLAN, tạo/reuse voice trong phạm vi cho phép, kiểm theo voice-performance.md, căn phụ đề và timing.
4. Dựng theo V2, xem preview và khung đại diện đủ mọi cảnh.
5. Kiểm tra góc zoom, chuyển bố cục, counter, chữ dài và lớpUI mô phỏng.
6. Render MP4 khi người dùng yêu cầu. Kiểm tra1080×1920,30fps,khung hình,duration,audio,giải mã toàn bộ.
7. Nghe/xem toàn bộ nếu công cụ hỗ trợ kiểm tra lời đọc, phụ đề, nhạc và SFX. Ghi rõ bước chưa làm, không coi đo âm lượng hoặc giải mã file là đã nghe toàn bộ. Nhờ người dùng kiểm tra đăng nháp TikTok khi cần.
8. Lưu MP4,mã nguồn,audio,timeline,nguồn,metadata và báo cáo trong workspace của task. Chỉ cập nhật tiến độ dự án khi có file trạng thái trong phạm vi được phép sửa.

Technical success, content success và business success là ba đánh giá riêng. Chưa có bằng chứng retention tăng chỉ từ thay đổi hoạt cảnh hoặc màu nền.

## Phiên bản chuẩn và revision video

Skill hiện hành là remotion-video-v2, revision 2026-10-11-expressive-voice. Người dùng yêu cầu nâng cấp V2 từ gói V1 mới; không tạo skill V3. Giữ bản V2 trước cập nhật trong baseline-v2-20261010/ và baseline V1 của đầu vào trong baseline-20261010/. Các bản này chỉ để đối chiếu, không điều khiển runtime.

Thay script hoặc sửa một video không tự tăng phiên bản chuẩn. Ví dụ: Topic_V2_r01.mp4 và Topic_V2_r02.mp4. Đọc [changelog](changelog.md); chỉ tạo V3 khi người dùng yêu cầu hoặc xác nhận.

## Nguồn nội bộ

R4_PLUS_PRODUCTION_NOTES.md, R4_TIKTOK_SAFE_NOTES.md, R4_COMPARISON_REVIEW.md, r4-video/src-safe/Design.tsx, timeline-plus.json và hội thoại người dùng. Video tham chiếu: r4-video/out/BankingScamAlert_R4Plus_TikTokSafe_1080x1920.mp4. Không sửa sources/.

## Cập nhật được người dùng cho phép ngày 10/10/2026

Áp dụng [chuẩn hình ảnh26](visual-standard-26.md), [prompt/imagegen](image-generation.md), tự chọn giọng ElevenLabs rồi HeyGen và font tiếng Việt. Các quy tắc mới này thay phần mô tả hình sơ sài hoặc bắt duyệt giọng/font trong baseline. Giữ palette, safe zone, khóa script, output và bằng chứng QA; giữ tên V2 theo yêu cầu trực tiếp. Baseline trước cập nhật ở baseline-20261010/, chỉ đọc để đối chiếu, không ghi đè hướng dẫn active.

## Bổ sung ngày 11/10/2026

Giữ V2 theo yêu cầu nâng cấp trực tiếp. Áp dụng [nhận diện đối tượng đích danh](named-subjects.md) và [GitHub Actions](github-actions.md), thay hướng dẫn GitHub cũ; baseline chỉ là lịch sử.
