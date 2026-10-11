# Diễn xuất giọng đọc V2

Revision `2026-10-11-expressive-voice`, theo yêu cầu người dùng ngày 11/10/2026. Áp dụng mặc định cho mọi video V2 sản xuất sau cập nhật, ở mọi chủ đề và cả ElevenLabs/HeyGen. Yêu cầu riêng của người dùng cho một video có ưu tiên. Cập nhật skill không tự cho phép sửa video đã hoàn tất, tạo speech thử hoặc render lại video cũ.

## Mục tiêu nghe

Giọng đọc phải kịch tính, hấp dẫn, có cảm xúc và nhấn nhá: vào ý nhanh, có năng lượng, biến đổi nhịp và ngữ điệu, tạo cảm giác câu chuyện đang tiến triển. Không chọn lối đọc chậm, ru ngủ, đều đều làm mặc định. Kịch tính đến từ cách kể nội dung thật; không thêm claim, hù dọa, khẩn cấp giả hoặc biến khả năng thành chắc chắn. Giữ nguyên lời thoại đã duyệt, bao gồm caveat, lợi ích và payoff.

## Chuẩn bị trước khi tạo speech

Lập `VOICE_DELIVERY_PLAN` gắn từng đoạn của script với cảm xúc, nhịp, từ/cụm cần nhấn và khoảng nghỉ có mục đích. Đây là ghi chú sản xuất, không là phần lời đọc hoặc phụ đề. Điều chỉnh theo nội dung, không ép mọi video có cùng cấu trúc:

| Đoạn | Cách đọc |
|---|---|
| Mở đầu | Vào thẳng ý, dứt khoát, thu hút ngay; không kéo dài lời dẫn hoặc nghỉ đầu |
| Diễn biến/giải thích | Nhanh, gọn, mạch lạc; đổi cao độ và lực đọc theo ý, tránh đọc như bài giảng |
| Tương phản/phát hiện/cảnh báo có thật | Nhấn cụm then chốt, có thể nghỉ ngắn trước điểm bật; tạo cao trào vừa mức nội dung |
| Số liệu/tên riêng/giới hạn quan trọng | Chậm cục bộ đủ để hiểu và phát âm đúng; không nuốt từ phủ định hoặc mức chắc chắn |
| Hành động/payoff/kết thông tin | Chắc, rõ, đáng nhớ; kết gọn, không kéo giọng thành lời kết buồn ngủ |

Chọn ít điểm nhấn thật sự có nghĩa trong mỗi câu; không nhấn mọi từ hoặc hét toàn bài. Nhịp nhanh là tiến triển rõ với ít nghỉ thừa, không là đọc dồn khiến khó hiểu. Không khóa một số từ/phút hoặc hệ số tăng tốc cho mọi script. Thời lượng chốt từ audio thực tế.

## Chọn giọng và điều khiển TTS

Theo [voice-routing.md](voice-routing.md), chọn giọng Việt tương thích có khả năng kể diễn cảm, linh hoạt, năng lượng và articulation rõ. Metadata/nhãn chỉ giúp chọn, không chứng minh chất lượng nghe; không chọn giọng chỉ vì tên có Calm hoặc giọng mẫu nghe rõ. Không khóa một voice ID cho mọi chủ đề.

Chuyển delivery plan thành chỉ dẫn mà model/provider hiện tại hỗ trợ. Đọc schema và model guide thật: chỉ dùng emotion tags, dấu câu, hướng dẫn hoặc tham số prosody/speed/style khi được hỗ trợ; không bịa trường API. Tách chỉ dẫn khỏi lời được nói. Nếu dùng tags trong text theo model guide, lưu cả script sạch và input có tags, xác minh tags không bị đọc thành tiếng hoặc đưa vào captions. Không tự đổi từ/nghĩa để tạo kịch tính.

Mặc định một generation theo routing; lập chỉ dẫn đầy đủ trước khi tạo, không tạo nhiều bản để chọn tùy hứng. Lỗi hoặc yêu cầu tạo lại phải xử lý trong quyền và chi phí hiện hữu theo routing; không tự mua credits. Thành công của TTS, tên giọng hoặc tags không chứng minh đã đạt cảm xúc/nhịp.

## Phối âm và dựng theo giọng

Căn cảnh, phụ đề và chuyển động theo điểm nhấn/timestamps của audio thật. Nhạc và SFX nếu dùng hỗ trợ đường cao trào, nằm dưới giọng và không che chữ; không bắt buộc thêm nhạc/SFX cho mọi video. Không dùng nhạc lớn để che giọng đều. Không coi tăng playback speed đơn thuần là nâng cấp diễn xuất; sửa đúng ngữ điệu, khoảng nghỉ và điểm nhấn, giữ rõ tiếng và nội dung đã khóa.

## QA nghe thực tế

Nghe toàn bộ narration và bản mix trong MP4 cuối khi có capability. Ghi artifact, timestamp, nhận xét cụ thể và trạng thái cho:

- `VOICE_ENERGY`: mở đầu có lực, kể có năng lượng, không chậm/ru ngủ.
- `VOICE_EMOTION`: cảm xúc và cao trào phù hợp nội dung, có thay đổi ngữ điệu.
- `VOICE_EMPHASIS`: nhấn đúng cụm quan trọng, tương phản và payoff; không đều hoặc nhấn mọi từ.
- `VOICE_PACING`: nhanh, gọn, nghỉ có mục đích; đoạn cần hiểu vẫn rõ, không kéo dài cuối câu vô ích.
- `VOICE_CLARITY_AND_INTEGRITY`: đủ nguyên văn, tên/số/dấu đúng, caveat và phủ định nghe rõ, không đọc tags, clipping hoặc nhạc lấn.
- `VOICE_SCENE_SYNC`: cảnh/caption/SFX theo nhịp và không tranh điểm nhấn với giọng.

Mỗi mục dùng PASS/FAIL/NOT_RUN/UNAVAILABLE với evidence. Đã nghe thấy chậm, đều, thiếu nhấn hoặc khó hiểu → FAIL; sửa phần production bị lỗi rồi kiểm lại trước khi xác nhận audio đạt. Không suy PASS từ prompt, waveform, loudness, duration, transcript hoặc render thành công. Nếu không thể nghe, ghi UNAVAILABLE; chưa nghe thì NOT_RUN. `VOICE_PACING_QA_STATUS` và QA tổng không PASS khi mục nghe bắt buộc chưa được kiểm. Báo đúng giới hạn, cung cấp artifact nghe được cho người dùng khi có; không tuyên bố đã nghe thay người dùng.

Lưu delivery plan, provider/model/voice, generation/input/script sạch, actual duration, timing và QA evidence cùng production run. Đây là chuẩn sản xuất và đánh giá cho video tương lai, không chứng nhận chất lượng audio chưa tạo.
