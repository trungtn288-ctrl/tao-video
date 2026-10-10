# Lồng tiếng HeyGen cho Remotion V2

Provider update được người dùng yêu cầu ngày 10/10/2026. HeyGen tạo audio; Remotion vẫn dựng hoạt cảnh, phụ đề, mix và render. Không dùng Video Agent/avatar/digital twin để tạo voice-only. Không clone giọng, mua credits hoặc thay tài khoản.

## Đầu vào và quyền thực hiện

Yêu cầu cập nhật skill không tự là lệnh tạo audio test. Khi người dùng yêu cầu tạo video/lồng tiếng mới với skill này, dùng đúng script đã chốt trong phạm vi yêu cầu. Thiếu script hỏi lấy script; không dùng nội dung video cũ. Chỉ sửa hình thì reuse audio đã duyệt. Không gửi project sources, credential hoặc dữ liệu không liên quan tới HeyGen.

## Chọn giọng và tạo speech

- Khám phá tool HeyGen hiện có và đọc schema thực tế; dùng heygen:heygen-workflows nếu khả dụng. Không giả tên endpoint hoặc voice ID.
- Nếu user muốn tự chọn, dùng choose_voice. Nếu user giao chọn giọng, dùng list_voices với engine=starfish, language/locale Việt và preference phù hợp; chọn ID trả về có xác nhận speech compatibility. Không hard-code Hoài My thành HeyGen voice ID.
- Nếu chưa có giọng và user chưa giao chọn, mở chooser Việt để chọn giọng. Giữ voice ID đã chọn trong task; không chọn lại khi chỉ sửa hình.
- Kiểm tra metadata available_engines; nếu kết quả chỉ orca hoặc mâu thuẫn filter starfish, không dùng ID đó cho create_speech. Có thể đọc một trang tiếp theo để xác minh; chưa có giọng tương thích thì báo blocker hoặc cho user chọn. Không tự đổi engine ngoài schema.
- Dùng create_speech đúng một lần cho script/giọng đã thống nhất. Schema hiện tại: text 1–5000 ký tự; inputType=text mặc định; voiceId; speed 0.5–2.0; language/locale theo support thực tế. Không truyền engine vào create_speech nếu schema không có field đó.
- Mặc định text nguyên văn và speed 1.0; nhịp rõ, tự nhiên, ít nghỉ thừa. Tốc độ khác theo yêu cầu/giọng; không coi tăng speed là thay thế diễn cảm. SSML chỉ khi cần và có support, break theo giây (ví dụ 0.35s), không millisecond; giữ nguyên từ/nghĩa script.
- Script vượt giới hạn: không cắt mất chữ hoặc tự chia thành nhiều lần tạo phát sinh phí. Báo giới hạn và thống nhất phương án chia/gộp trước khi gửi.
- Không tạo auditions/biến thể unasked. Outcome không rõ thì kiểm tra bằng read/status capability nếu có; không gửi lại để thử. Lỗi rõ thì báo nguyên nhân, chỉ regenerate khi user yêu cầu; không loop tiêu credits.

## Audio → timeline → Remotion

Lưu voice ID/name, script chính xác, input mode, speed, locale, response ref/audio URL, duration và timestamps thực tế trong workspace task; không lưu credentials. URL có thể hết hạn, không dùng signed URL làm asset ổn định vĩnh viễn.

Để dựng, dùng workflow tải asset được runtime cho phép tới workspace/public rồi kiểm tra file audio tồn tại và giải mã được. Không tải remote media chỉ để né hạn chế hiển thị. Nếu không thể chuyển bytes, báo chưa có local asset; không bịa path hoặc hoàn tất tích hợp.

Word timestamps nếu HeyGen trả về: kiểm tra thứ tự, bounds và khớp script trước dùng. Không có timestamps thì dùng alignment/transcription capability khả dụng với audio thực, đối chiếu từng từ; không coi timing ước lượng là karaoke đã sync. Giữ phụ đề nguyên script, chia tối đa hai dòng theo chuẩn V2. Scene timing dựa trên duration/audio thực, làm tròn frame nhất quán ở 30fps.

Audio là narration track của Remotion, không thay đổi style/safe zones V2. Nhạc dưới voice, SFX không che lời; spoken benefit/consequence, certainty và payoff phải còn nghe rõ.

## Kiểm tra và báo kết quả

Phân biệt skill đã cập nhật, voice đã tạo, asset đã tải, timestamps đã align, video đã render và đã nghe/xem. Audio generation success không tự chứng minh phát âm hay diễn cảm tốt. Nghe toàn audio khi capability có; kiểm tra chữ Việt/tên riêng/số, đủ script, khoảng nghỉ, clipping, tốc độ và sync. Chưa nghe thì ghi NOT_RUN, nhờ user test, không báo voice QA PASS.

Khi test thấy sai phát âm/nhịp, giữ log và chỉ tạo lại theo yêu cầu user; không tự sửa script đã khóa. Không gọi HeyGen video generation chỉ để lấy audio.
