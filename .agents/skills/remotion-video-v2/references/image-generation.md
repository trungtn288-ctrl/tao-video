# Tạo hình cho Remotion V2

## Mục lục

1. Cách tạo bộ26 đã được người dùng thích
2. Công cụ và quyền
3. Prompt sản xuất
4. Gọi lệnh
5. Kiểm và tích hợp

## 1. Cách tạo bộ26

Dùng skill `imagegen` và `tools.image_gen__imagegen` tích hợp, một call cho mỗi hình; dựng prompt từ common + số/tiêu đề + scene. Ảnh là bitmap do engine tạo; Remotion chưa tham gia tạo26 ảnh. `transparent_background=false`, không input image, không tham số API key/model/seed/quality riêng. Các call độc lập được chạy nhóm, mỗi ảnh có prompt riêng, không ghép26 ảnh thành một contact sheet.

Common gốc giữ nguyên trong original-image-common.txt. Catalog image-prompts-26.json giữ 26 mô tả và đường dẫn lịch sử của bộ ảnh gốc. Gói cập nhật có 14 ảnh WebP số 13–26 từ assets2.zip, đánh dấu asset_status=INCLUDED. Ảnh 01–12 chưa được cung cấp, đánh dấu NOT_INCLUDED. Chỉ đọc ảnh có file thật; không khẳng định đã đối chiếu với PNG gốc. Mô tả21–26 còn nguyên văn;01–20 đã biên soạn lại thành recipe từ ghi nhận cảnh, không tuyên bố là log prompt nguyên văn. Không hứa tái sinh đúng từng pixel bằng prompt.

Ảnh catalog là tham chiếu thị giác, không template bắt buộc dùng màu bếp vàng/đồ cơm cho mọi chủ đề. Các đồ thị, bản đồ, mô hình khoa học, chữ UI và checklist của bộ26 chỉ minh họa cách trình bày; không dùng ảnh đó làm dữ liệu, chứng nhận QA, địa lý hay giải phẫu thật. Chi tiết nhỏ trong ảnh AI vẫn cần kiểm.

## 2. Công cụ và quyền

Đọc skill imagegen đang có khi áp dụng; tuân thủ schema tool hiện tại. Dùng built-in mặc định; không tự chuyển CLI/API vì muốn chất lượng/cỡ ảnh hoặc batch. Không cần user nhắc gọi imagegen hoặc duyệt từng prompt khi đã yêu cầu video theo V2. Không tạo audio/video mới chỉ để test việc cài skill.

Tạo asset riêng theo cảnh. Sửa ảnh cần giữ bất biến, chỉ đổi chi tiết gây lỗi. Với ảnh local, xem bằng view_image trước sửa. Dùng referenced_image_paths nếu mọi input có path và schema hỗ trợ; không truyền cả path lẫn num_last_images_to_include. Nếu cần alpha đặt transparent_background=true; không dùng nền ô caro thay alpha.

Nếu thiếu tool hoặc bị chặn thật: báo capability, không giả tạo ảnh hoặc bù ảnh photoreal bằng SVG sơ sài. CLI/API chỉ khi user yêu cầu/cho phép theo imagegen hiện tại; không nhúng key vào skill.

## 3. Prompt sản xuất cho video

Ảnh bộ26 ngang3:2 với banner để người dùng đọc chuẩn. Ảnh dùng trong video tạo dọc9:16 hoặc tỷ lệ phục vụ bố cục thật, không banner số mục, không sinh phụ đề/nguồn/số liệu vào bitmap. Chữ chính xác dựng trong Remotion bằng font đã kiểm.

```text
Use case: photorealistic-natural
Asset type: visual asset for a Vietnamese faceless vertical video
Primary request: Show exactly the subject, state and action corresponding to this narration: {narration}
Subject: {identity, age/species/model, scale, required features}
Scene/backdrop: {location, time, only necessary props}
Action/state: {observable action or static state; do not claim a still is real motion}
Style/medium: premium natural editorial photography; lifelike, rich, inviting, not oversmoothed
Composition/framing: portrait 9:16; {camera distance/angle/focus}; keep important subject and interaction in planned safe area; leave {text space} clear
Lighting/mood: {motivated light direction}; natural skin/food/object colors; restrained contrast
Materials/textures: {rice grains, ceramic, glass, wood, metal, skin, fur, etc. relevant to scene}; believable reflections and contact shadows
Continuity: preserve {same character, clothing, object, container, room, light direction}
Text: no baked-in subtitles, titles, numbers, sources, fake labels or logos
Authenticity: generated illustration, not documentary evidence; {required label added in Remotion if needed}
Constraints: correct anatomy, scale, perspective and physical contact; visual meaning cannot exceed approved narration
Avoid: extra/fused fingers or limbs, incorrect species, floating objects, penetrating hands, distorted machines, plastic food/skin, crude flat icons as hero, invented branding, watermark, blurry crop
```

Không gửi toàn Project Sources tới image engine. Chỉ gửi brief cảnh và tham chiếu cần thiết. Không tự thêm claim/tình tiết ngoài script. Với người thật/sản phẩm/địa điểm/sự kiện cần đúng nhận diện, ưu tiên tài nguyên xác minh; AI minh họa không thay bằng chứng.

Đổi taxonomy cho product-mockup/historical-scene/scientific-educational khi phù hợp. Cảnh dữ liệu/giao diện phải dùng mã/vector/dữ liệu đã kiểm cho phần chính xác; imagegen chỉ có thể tạo backdrop/mockup không chứa thông tin quan trọng.

## 4. Gọi lệnh

Helper chỉ biên soạn prompt, không có engine và không tự gọi dịch vụ:
```bash
python scripts/build_image_prompt.py --input scene-brief.json --output scene-prompt.txt
python scripts/build_image_prompt.py --reference 8 --output reference-08-prompt.txt
```

scene-brief.json chứa narration, subject, action, setting, camera, lighting, materials, continuity, text_space; chỉ các trường liên quan. Sau biên soạn, đọc prompt và gọi công cụ thật qua host đang có:
```javascript
const result = await tools.image_gen__imagegen({
  prompt: scenePrompt,
  transparent_background: false
});
generatedImage(result);
```
Đây là lệnh functions orchestration trong ChatGPT Work, không phải npm/Node API hoặc lệnh terminal có thể gọi ngoài host. Không bịa `model`, `quality`, `size`, `seed` hay đường dẫn đích thành tham số của built-in nếu schema không có. Có thể nhóm call độc lập; bảo đảm tất cả được await và có một call cho mỗi requested asset. Thực thi phụ thuộc capability, không phụ thuộc tên plugin Remotion.

## 5. Kiểm và tích hợp

Xem asset thật trước dựng: nhận ra đối tượng, đúng ý/trạng thái, tay/bộ phận, chất liệu, ánh sáng, tiếp xúc, logo/chữ, độ nét sau crop. Sửa một lỗi cụ thể mỗi vòng, không tạo vô hạn biến thể không cần thiết. Nếu tạo lại tốn phí hoặc vượt quyền hiện hữu, áp dụng giới hạn nguồn/chi phí ở chuẩn26.

Copy ảnh đạt vào public/assets của task, cập nhật đường dẫn composition; giữ file gốc. Dùng Img hoặc media component Remotion hiện có; object-fit/crop đúng tỷ lệ, không kéo méo. Motion bằng frame/interpolation làm rõ ý, không biến ảnh tĩnh thành thao tác thật. Không cắt từ ảnh ngang tới mức mất chi tiết tương tác.

Thực hiện cổngA–E và checklist chuẩn26. Sơ đồ/chữ/bản đồ/số liệu phải kiểm bản render từ dữ liệu thật. Lưu prompt, thuộc tính continuity, path ảnh, nguồn/label, các sửa đổi và evidence. Duyệt prompt không thay kiểm kết quả.

## Bổ sung nhận diện đối tượng đích danh

Đọc và áp dụng [named-subjects.md](named-subjects.md): ưu tiên ảnh thực tế trên mạng đúng tên/nhận diện/bối cảnh; ảnh tạo phải giữ đúng đối tượng, kiểm theo tham chiếu và không giả tư liệu thật. Quy tắc này ưu tiên hơn lựa chọn ảnh minh họa chung khi script gọi tên cụ thể.
