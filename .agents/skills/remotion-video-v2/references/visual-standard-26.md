# CHUẨN HÌNH ẢNH CHUNG CHO VIDEO FACELESS

Phiên bản tài liệu: 1.0 · Ngày: 10/10/2026

Mục tiêu: hình ảnh giống thật khi mô tả thế giới thật; đẹp, có chiều sâu, chuyển động có ý nghĩa, khớp lời thoại và tạo hứng thú. Áp dụng theo loại cảnh thay vì viết thêm luật riêng cho từng chủ đề. Chuẩn đã được người dùng duyệt và yêu cầu tích hợp vào Remotion Video V2 ngày 10/10/2026. Áp dụng bắt buộc khi skill được gọi; bản baseline cũ được giữ để đối chiếu.

## 1. Nguyên tắc quyết định toàn bộ chuẩn

1. Người xem phải nhận ra đối tượng và hiểu hành động ngay. Chén cơm phải trông như chén cơm, tủ lạnh phải trông như tủ lạnh; không cần đọc nhãn để đoán hình.
2. Đối tượng có thật trong đời sống ưu tiên hình thật hoặc hình dựng có chất lượng như ảnh chụp. Không dùng hình khối sơ sài làm minh họa chính chỉ vì dễ lập trình.
3. Sơ đồ, con số, mũi tên, bảng biểu và thao tác giao diện cần chính xác, rõ ràng. Những phần này được thiết kế bằng hình học/chữ, không bắt buộc giả làm ảnh chụp.
4. Hình ảnh phải bổ sung thông tin, hành động hoặc cảm xúc cho lời đọc. Một chuỗi ảnh đẹp nhưng không đúng ý vẫn không đạt.
5. Đẹp không được làm sai sự thật: không bịa hiện trường, bằng chứng, tỷ lệ, số liệu hoặc tính năng sản phẩm.
6. Nhất quán về đối tượng, ánh sáng, màu, bối cảnh và phong cách trong cùng một câu chuyện. Thay góc máy được; đổi đối tượng vô cớ không được.
7. Sinh động đến từ hành động và tiến triển. Không coi rung, nhấp nháy, phóng to liên tục hoặc đổi cảnh nhanh là chất lượng.
8. Loại tài nguyên không quyết định chất lượng. Hình thật sai nội dung, ảnh AI méo, mô hình 3D nhựa và vector sơ sài đều có thể không đạt.

Chuẩn này giảm nhu cầu nâng cấp theo từng chủ đề bằng một hệ phân loại và kiểm tra chung. Không thể bảo đảm mọi ảnh/video đầu vào luôn đạt ngay lần đầu. Khi tài nguyên lỗi, sửa hoặc thay tài nguyên theo chuẩn hiện hữu; không tự tăng phiên bản chuẩn.

## 2. Phân biệt ba nhóm cảnh

| Nhóm | Nội dung | Cách thể hiện chính | Điều phải tránh |
|---|---|---|---|
| Thế giới thật | Người, động vật, thực phẩm, đồ vật, nhà cửa, thiên nhiên, thao tác thực tế | Video thật, ảnh chụp, ảnh AI như ảnh chụp, 3D đạt chất lượng thật | Đồ vật được ghép từ vài hình chữ nhật/tròn, người hoạt hình ngoài chủ đích |
| Giải thích | Cơ chế, quy trình, mối quan hệ, khái niệm, cấu tạo | Sơ đồ động, hình cắt lớp, hình minh họa có chi tiết, kết hợp ảnh thật | Giả sơ đồ thành bằng chứng thực tế; quá nhiều chi tiết không cần thiết |
| Thông tin chính xác | Số liệu, bảng, biểu đồ, bản đồ, giao diện, trích dẫn | Chữ và hình thiết kế bằng mã/vector hoặc dựng từ dữ liệu xác minh | Dùng ảnh AI tạo chữ/số quan trọng, tự bịa giao diện hay dữ liệu |

Một video có thể kết hợp cả ba. Phong cách mặc định là hình thật làm nền tảng, đồ họa chính xác hỗ trợ giải thích, chữ có chọn lọc nhấn ý chính.

## 3. Chọn nguồn hình và phương án thay thế

### 3.1 Nguồn phù hợp theo mục đích

- Tư liệu do người dùng cung cấp: dùng khi đúng nội dung và chất lượng đủ tốt; giữ nhận diện đối tượng nếu được yêu cầu.
- Tư liệu chính thức của sự kiện/sản phẩm: ưu tiên khi cần thể hiện một sự kiện, địa điểm, nhân vật hoặc sản phẩm cụ thể. Kiểm tra quyền sử dụng phù hợp.
- Video/ảnh có quyền sử dụng phù hợp: chọn đúng đối tượng, hành động, địa lý và bối cảnh. Lưu nguồn và điều kiện sử dụng.
- Ảnh AI: phù hợp với tình huống minh họa chung khi không cần bằng chứng hiện trường hoặc nhận diện chính xác người/sản phẩm thật. Phải qua kiểm tra hình dạng và ngữ nghĩa.
- 3D: dùng khi cần nhiều góc máy, cấu tạo hoặc chuyển động mà tài nguyên khác không đáp ứng. Chỉ dùng làm đối tượng chính nếu chất liệu, ánh sáng và hình dạng đạt yêu cầu.
- Vector/mã: dùng cho sơ đồ, chữ, đường dẫn, bản đồ, bảng biểu, điểm nhấn và lớp giao diện. Không tự thay ảnh thật bằng hình vẽ sơ sài khi thiếu tài nguyên.

Không có thứ tự máy móc “ảnh thật luôn hơn ảnh AI”. Chọn nguồn đáp ứng đồng thời: đúng ý, chất lượng, tính xác thực cần thiết, quyền sử dụng và khả năng thực hiện.

### 3.2 Khi chưa có tài nguyên đạt

Thực hiện theo thứ tự phù hợp: đổi từ khóa hoặc nguồn → đổi góc nhìn → dùng ảnh chất lượng cao với chuyển động máy nhẹ → dựng minh họa chi tiết đúng chủ đích → báo giới hạn nếu vẫn thiếu phần quan trọng. Không lặp vô hạn việc tạo ảnh/video có phí. Không tự mua gói, đổi nhà cung cấp hoặc vượt quyền đã có.

Chỉ báo người dùng khi thực sự cần quyết định về chi phí, quyền, thay phương pháp hoặc dữ liệu chưa có. Không bắt duyệt từng cảnh trong mọi video.

## 4. Độ giống thật: tiêu chí chung

Một hình đời thực đạt khi đồng thời có:

- **Hình dạng:** cấu trúc, tỷ lệ, vị trí các bộ phận hợp lý.
- **Chất liệu:** bề mặt phù hợp với gỗ, kim loại, kính, vải, da, lông, sứ, nhựa hoặc thực phẩm. Có chi tiết vừa đủ, không bóng nhựa đồng loạt.
- **Ánh sáng:** có nguồn sáng hợp lý; sáng/tối giúp nhận khối; không vùng cháy hoặc tối khiến mất đối tượng.
- **Bóng và tiếp xúc:** đồ vật có bóng tiếp xúc với bàn/sàn; chân tay chạm đúng vật; không lơ lửng ngoài chủ đích.
- **Phối cảnh:** đường nét, kích thước xa/gần và góc nhìn nhất quán.
- **Chi tiết:** phần cần nhìn rõ có độ nét đủ; không da sáp, lông bệt, thực phẩm như viên nhựa.
- **Bối cảnh:** hỗ trợ nhận ra tình huống; không nền vô nghĩa hoặc sai môi trường.
- **Ngữ nghĩa:** người đang làm đúng thao tác; đồ vật đúng loại; trạng thái đúng lời đọc.

Không đòi mọi bề mặt đều hoàn hảo. Một vài chi tiết tự nhiên như nếp vải, vân gỗ, bề mặt cơm không đều giúp hình có sức sống. Không thêm bẩn, hư hỏng hoặc dấu bệnh ngoài nội dung.

## 5. Người, khuôn mặt, bàn tay và hành động

### 5.1 Người và khuôn mặt

- Tỷ lệ đầu/thân/chân tay hợp lý; dáng đứng/ngồi có trọng tâm.
- Mắt, miệng, tai, tóc và răng không méo, thừa, dính hoặc biến dạng.
- Da có kết cấu tự nhiên ở mức nhìn thấy; tránh da sáp, làm mịn quá mức hoặc sáng bóng như tượng.
- Tuổi, trang phục, nghề nghiệp và bối cảnh phù hợp. Không tự đổi đặc điểm đã được người dùng xác định.
- Biểu cảm đúng mức: lo lắng, tập trung, vui hoặc ngạc nhiên theo nội dung; không cười cố định trong mọi tình huống.
- Khi cùng một nhân vật qua nhiều cảnh: giữ khuôn mặt, tóc, trang phục, vóc dáng và phụ kiện, trừ khi câu chuyện giải thích sự thay đổi.
- Không dùng nhân vật AI như bằng chứng một người thật đã phát biểu, trải nghiệm hoặc chứng thực.

### 5.2 Bàn tay và thao tác

- Cấu trúc ngón/bàn tay hợp lý; ngón không thừa, dính, đứt hoặc xuyên đồ vật. Ngón bị khuất không phải lỗi nếu tư thế che khuất hợp lý.
- Cầm đúng vị trí, hướng và lực; vật có kích thước tương ứng bàn tay.
- Nhìn rõ thao tác quan trọng: đặt hộp, mở cửa, chạm nút, rót nước, cắt hoặc đo.
- Không dùng ảnh bàn tay tĩnh rồi gọi đó là video thực hiện một hành động.
- Nếu AI không làm được thao tác đúng: dùng tư liệu thật hoặc đổi góc cận vào đồ vật, không che lỗi bằng cắt nhanh.

### 5.3 Người trong video faceless

Ưu tiên bàn tay, góc qua vai, thân người, bóng dáng hoặc góc từ sau khi phù hợp; không bắt buộc bỏ toàn bộ người. “Không lộ mặt chủ kênh” không đồng nghĩa chỉ dùng biểu tượng. Không tạo người dẫn nói nhép nếu nhiệm vụ chỉ yêu cầu hình minh họa và voiceover.

## 6. Trẻ em và nhóm tuổi đặc biệt

- Giữ tuổi thể hiện, chiều cao, tỷ lệ cơ thể và hành vi phù hợp; không trẻ hóa hoặc người lớn hóa vô cớ.
- Trang phục, môi trường và tư thế phù hợp nội dung.
- Khi cần giống một trẻ cụ thể, dùng ảnh tham chiếu theo phạm vi được phép; không tuyên bố giữ nhận diện nếu đã đổi nét rõ rệt.
- Hình minh họa trẻ ăn, chơi, học phải rõ hành động và tránh lỗi tay, đồ chơi, thức ăn hoặc vật xuyên người.
- Không dùng hình trẻ có biểu hiện bệnh hoặc đau đớn như bằng chứng một kết quả sức khỏe không được xác minh.

## 7. Động vật, chim, cá và côn trùng

- Đúng loài hoặc nhóm được lời thoại đề cập. Không dùng một loài gần giống thay cho loài cụ thể có ý nghĩa.
- Đúng tỷ lệ đầu, thân, chân, cánh, vây, đuôi, tai và mõm; không thừa bộ phận hoặc ghép đặc điểm nhiều loài.
- Lông, da, vảy, lông vũ có chất liệu; mắt và dáng đứng có sức sống, không như đồ chơi nhựa.
- Bước đi, bay, bơi hoặc ăn phù hợp giải phẫu và môi trường.
- Hành động liên tục không làm thay đổi loài, màu lông, kích thước hay số chi giữa các khung.
- Môi trường sống phù hợp; không đặt động vật sai môi trường chỉ để có cảnh đẹp.
- Cảnh cận cần mắt, đầu hoặc hành động rõ; cảnh rộng cần quy mô và môi trường.
- Không dựng hành vi bất thường rồi trình bày như tư liệu tự nhiên hoặc bằng chứng khoa học.

## 8. Thực phẩm, đồ uống và cảnh bếp

### 8.1 Thực phẩm

- Nhận ra đúng loại thực phẩm: hạt cơm, sợi mì, thịt, rau, trái cây, bánh hoặc đồ uống có cấu trúc tương ứng.
- Màu, độ ẩm, bề mặt, độ bóng và kích thước tự nhiên; tránh đồng đều như vật nhựa.
- Chén, đĩa, ly và hộp có hình dáng, độ dày, chất liệu, miệng, đáy và bóng hợp lý.
- Trạng thái phù hợp: sống/chín, nóng/lạnh, nguyên miếng/cắt nhỏ, trong hộp/ngoài hộp. Không tự thêm mốc hay hỏng khi không có bằng chứng.
- Cơm bảo quản không đúng có thể vẫn nhìn bình thường. Không dùng dấu mốc giả làm dấu hiệu bắt buộc để người xem nhận diện nguy cơ.

### 8.2 Nấu và bảo quản

- Video thao tác phải thể hiện đúng bước và đúng vật dụng.
- Hơi nóng chỉ dùng khi phù hợp trạng thái; không phủ hơi giả lên đồ lạnh hoặc dùng lửa làm dấu hiệu độc tố bị loại bỏ nếu nội dung không nói vậy.
- Hộp nông phải nhìn thấy độ nông, không chỉ ghi nhãn lên một hộp sâu.
- Cảnh cất tủ lạnh phải thể hiện hộp được đưa vào khoang lạnh; không chỉ xuất hiện biểu tượng tủ.
- Tủ lạnh có cửa, tay nắm, ngăn/kệ, độ sâu và ánh sáng bên trong hợp lý. Nếu không cần nhận diện thương hiệu thì dùng tủ không có logo.
- Góc cận làm rõ hành động; góc trung giúp hiểu bếp và bối cảnh. Bề mặt bếp gọn, tự nhiên, không nhiều đạo cụ tranh sự chú ý.

## 9. Đồ vật, thiết bị và sản phẩm

Áp dụng cho điện thoại, máy tính, tủ lạnh, máy móc, dụng cụ, mỹ phẩm, quần áo, nội thất, phương tiện và hàng tiêu dùng.

- Đúng cấu trúc, chức năng, tỷ lệ và chất liệu.
- Có độ dày, khối, đường viền, khớp nối, tay nắm hoặc bộ phận quan trọng. Không thay vật thể bằng hình chữ nhật có nhãn.
- Góc nhìn cho thấy chi tiết liên quan tới lời đọc; không dùng góc đẹp nhưng che bộ phận đang nói.
- Vật thể chạm bàn/sàn có bóng tiếp xúc; kính có phản xạ hợp lý; kim loại không biến thành nhựa.
- Với sản phẩm cụ thể: đúng mẫu, màu, bao bì, logo và bộ phận đã xác minh. Khi cần đúng tuyệt đối, ưu tiên hình thật hoặc tài nguyên chính thức.
- Chữ trên nhãn quan trọng phải đọc đúng. Không dùng chữ AI méo rồi coi là bao bì thật.
- Không dựng hiệu quả trước/sau hoặc tính năng chưa được xác minh.
- Không tự biến minh họa sản phẩm chung thành quảng cáo cho một thương hiệu.

## 10. Phương tiện, máy móc và môi trường công việc

- Xe có bánh, trục, cửa, đèn, gương và nội thất đúng cấu trúc; không méo khi di chuyển.
- Máy móc có bộ phận gắn đúng, chuyển động hợp lý, không ống/dây xuyên nhau vô cớ.
- Cảnh kho, nhà máy, văn phòng có bố trí và thao tác phù hợp câu chuyện.
- Nếu lời nói đề cập thiết bị hoặc quy trình cụ thể, không chọn tư liệu một quy trình khác chỉ vì cùng ngành.
- Không lấy cảnh máy chạy làm bằng chứng năng suất hoặc mức an toàn.
- Khi minh họa thao tác chuyên môn, phải kiểm tra thông tin và môi trường cần thiết; không tự đặt tiêu chuẩn kỹ thuật bằng hình.

## 11. Không gian, kiến trúc, thiên nhiên và địa điểm

- Nhà, phòng, cửa, cầu thang và đồ nội thất có phối cảnh hợp lý, quy mô thực, điểm tiếp xúc đúng.
- Ánh sáng bên trong phù hợp cửa sổ/đèn; không đồ đạc treo lơ lửng hoặc cửa dẫn tới không gian vô lý.
- Cảnh nông thôn, thành phố, biển, rừng hoặc khu công nghiệp phải khớp lời thoại; không chọn cảnh gần nghĩa cho có.
- Nếu nói về một địa điểm cụ thể: dùng tư liệu đúng địa điểm khi đã xác minh. Nếu chỉ có hình minh họa, ghi rõ khi có nguy cơ người xem hiểu đó là nơi thực tế.
- Thời tiết và thời điểm trong ngày phù hợp; không đổi đêm thành ngày giữa một hành động liên tục.
- Cây, hoa, mặt nước, mây và địa hình có chất liệu, quy mô và chuyển động hợp lý.
- Hình rộng giúp định vị; hình trung/cận giúp hiểu chi tiết. Không lặp flycam vô nghĩa suốt video.

## 12. Tin tức, sự kiện, nhân vật và tư liệu lịch sử

- Tách rõ tư liệu đúng sự kiện, ảnh lưu trữ, minh họa chung, hình tái dựng và hình AI.
- Không dùng ảnh AI như hiện trường hoặc như chứng cứ một việc đã xảy ra.
- Không ghép người thật vào hành động/phát ngôn chưa có nguồn rồi trình bày như tư liệu.
- Không dùng ảnh động đất, tai nạn hoặc chiến sự ở nơi khác để ngầm gán cho sự kiện đang nói.
- Nếu tái dựng giúp hiểu cơ chế, ghi “minh họa” hoặc “tái dựng” khi cần, đặt nhãn đọc được và không che ý chính.
- Mốc thời gian, địa điểm, con số và trạng thái phải theo dữ liệu đã xác minh; không làm hình kịch tính hơn mức thông tin cho phép.
- Khi không có tư liệu thật phù hợp, dùng bản đồ, dòng thời gian hoặc đồ họa dữ kiện chính xác thay vì giả hiện trường.

## 13. Sức khỏe, khoa học, cơ thể và thế giới vi mô

- Cơ thể, cơ quan, cấu tạo và vị trí tương đối phải hợp lý theo thông tin chuyên môn phù hợp.
- Hình cắt lớp và cơ chế được phép dùng minh họa; không cần giả ảnh chụp khi việc đó làm khó hiểu.
- Phân biệt hình hiển vi thật với minh họa phóng đại. Không gọi hạt vẽ trên màn hình là ảnh vi khuẩn thực tế.
- Màu và kích thước mô phỏng cần có chú thích khi ảnh hưởng cách hiểu; không biến phóng đại thành tỷ lệ thật.
- Chuyển động cơ chế phải đúng hướng và quan hệ; không tự thêm nguyên nhân hoặc tác dụng điều trị.
- Không vẽ biểu đồ bệnh giảm hoặc tế bào “được chữa khỏi” như bằng chứng kết quả không có nguồn.
- Tránh hình gây khó chịu không cần thiết. Cảnh báo sức khỏe thể hiện bằng tình huống, lời và sơ đồ rõ, không bắt buộc hình máu/meo mó để gây sốc.

## 14. Điện thoại, ứng dụng và thao tác giao diện

- Thiết bị có hình dạng, độ dày và tỷ lệ đúng; màn hình trong phối cảnh rõ.
- Nội dung giao diện quan trọng dựng bằng chữ/mã hoặc dùng ảnh chụp đã xác minh; không phụ thuộc chữ AI.
- Nếu là mockup: thể hiện đó là giao diện minh họa khi có nguy cơ nhầm với app thật.
- Nút, biểu mẫu, trạng thái và luồng hành động hợp lý. Không bịa một tính năng bảo vệ/an toàn của app.
- Thao tác có trình tự: nhìn thấy nút → chạm → phản hồi → trạng thái mới. Không chỉ đặt một bàn tay lên màn hình.
- Dùng tên, số tài khoản, mã và dữ liệu giả rõ ràng khi minh họa; không hiển thị dữ liệu cá nhân ngoài phạm vi.
- Giữ giao diện đủ lớn để đọc trên điện thoại. Nếu cả màn hình quá nhỏ, cắt cận phần liên quan hoặc tạo bảng giải thích bên cạnh.

## 15. Bảng biểu, biểu đồ, số liệu và bản đồ

### 15.1 Nguyên tắc chính xác

- Số liệu, đơn vị, mốc thời gian, nguồn và phạm vi phải có cơ sở. Thiếu dữ liệu không được tạo biểu đồ giả.
- Dựng từ dữ liệu bằng mã/vector; kiểm lại chữ và số. Ảnh AI không dùng cho bảng/biểu đồ có thông tin cần chính xác.
- Phân biệt số quan sát được, ước tính, giả định và minh họa. Ghi nhãn phù hợp.
- Hoạt cảnh không được tạo cảm giác một con số tăng/giảm theo thời gian nếu thực tế chỉ có một giá trị tĩnh.

### 15.2 Chọn loại trình bày

| Thông tin cần truyền | Dạng ưu tiên |
|---|---|
| Một con số hoặc một mốc | Thẻ số lớn kèm đơn vị và ý nghĩa |
| So sánh vài đối tượng | Cột/thanh, bảng ngắn hoặc thẻ đặt cạnh nhau |
| Biến đổi theo thời gian | Đường hoặc cột theo thời gian khi có dữ liệu tương ứng |
| Các phần của một tổng | Cột chồng; biểu đồ tròn chỉ khi ít nhóm và thật sự giúp hiểu |
| Điều kiện/lựa chọn | Sơ đồ quyết định hoặc so sánh “nên/không nên” |
| Vị trí/di chuyển | Bản đồ có nhãn, đường đi hoặc dấu vị trí |
| Thứ tự sự kiện | Dòng thời gian |
| Quan hệ/cơ chế | Sơ đồ động có mũi tên rõ |

### 15.3 Bảng và biểu đồ trên video dọc

- Mỗi khung chỉ giữ hàng/cột cần thiết; có thể chia nhiều bước thay vì thu nhỏ cả bảng.
- Hướng dẫn tham khảo: bảng khoảng 2–4 cột, 3–5 hàng thường dễ xử lý hơn trên điện thoại; không phải quota bắt buộc. Vượt mức phải kiểm độ đọc thực tế hoặc tách khung.
- Chú giải, trục, nhãn và đơn vị đọc được; không để chữ nguồn bé tới mức không thể xem.
- Không cắt trục hoặc làm lệch diện tích/chiều dài gây hiểu sai. Nếu trục không bắt đầu từ 0 và điều đó có ý nghĩa, thể hiện rõ.
- Số tô sáng phải khớp lời đọc. Counter kết ở đúng giá trị; không có chữ số nhảy sai hoặc thiếu đơn vị.
- Các con số mang ý nghĩa khác nhau không đặt như thể cùng một thước đo.

### 15.4 Bản đồ

- Dùng dữ liệu địa lý phù hợp; kiểm vị trí, tên và tuyến đường.
- Không dùng bản đồ AI có đường biên/nhãn bịa cho thông tin thực tế.
- Ghi rõ đường đi hoặc khu vực minh họa nếu không phải dữ liệu chính xác.
- Máy bay/xe/tàu trên bản đồ là ký hiệu; không phải bằng chứng có hành trình thực tế.

## 16. Sơ đồ, biểu tượng và khái niệm trừu tượng

- Vector phù hợp ở đây. Nét, màu, kích thước và độ dày thống nhất.
- Mũi tên phải có hướng và ý nghĩa rõ; không quá nhiều nhánh cùng lúc.
- Mỗi bước hiện khi lời đọc chuyển tới; bước trước có thể giảm nhấn để giữ trọng tâm.
- Biểu tượng hỗ trợ nội dung, không thay toàn bộ tình huống đời sống bằng icon.
- Không gán quan hệ nhân quả chỉ từ một mũi tên nếu thông tin chỉ là tương quan.
- Với tiền, rủi ro, thời gian, năng lượng hoặc quyết định: ưu tiên tình huống/đối tượng thật rồi dùng sơ đồ giải thích phần trừu tượng.
- Có thể dùng hình ẩn dụ nếu dễ hiểu và không bị nhầm là sự thật. Không dùng ẩn dụ phức tạp khiến người xem phải giải mã.

## 17. Phong cách đẹp và thống nhất

### 17.1 Ánh sáng và chất liệu

- Ưu tiên ánh sáng có hướng, tương phản vừa đủ, màu da/đồ ăn tự nhiên.
- Có lớp gần, đối tượng chính và lớp xa khi phù hợp; nền không cạnh tranh với hành động chính.
- Độ mờ nền dùng để tập trung; không mờ tới mức mất vật thể cần giải thích.
- Hạn chế filter màu làm thực phẩm sai màu, người sai da hoặc số liệu giảm tương phản.
- Ảnh tối/cảnh báo vẫn phải nhìn rõ; ảnh sáng/hướng dẫn không được cháy chi tiết.

### 17.2 Bố cục

- Mỗi cảnh có một trọng tâm chính và thứ tự nhìn rõ.
- Có vùng đặt chữ hoặc chọn góc máy không cần phủ chữ lên đối tượng.
- Chân dung và vật thể không cắt đầu, tay, bộ phận cần thao tác hoặc chi tiết lời đọc đang nhắc tới.
- Không chèn nhiều ảnh nhỏ cùng lúc chỉ để lấp đầy màn hình.
- Khoảng trống có chủ đích được phép; khung trống vì thiếu tài nguyên không đạt.
- Ảnh nguồn ngang không kéo giãn thành dọc. Cắt lại theo trọng tâm, mở rộng nền phù hợp hoặc chọn nguồn khác.

### 17.3 Nhất quán toàn video

Giữ cùng ngôn ngữ ánh sáng, mức chân thực, xử lý màu và chất lượng. Ảnh chụp + sơ đồ sạch là sự kết hợp có chủ đích; ảnh chụp + hoạt hình trẻ em + 3D nhựa xen ngẫu nhiên không đạt.

Ghi trước những thuộc tính cần giữ: nhân vật, đồ vật, trang phục, bếp/phòng, màu hộp, thời điểm trong ngày và hướng hành động. Khi đổi cảnh, kiểm lại các thuộc tính này.

## 18. Chữ, phụ đề, vùng an toàn và độ nét

Giữ mốc bố cục V2 làm điểm xuất phát; tự chọn font hỗ trợ tiếng Việt theo font-selection.md, đã được người dùng cho phép.

- Canvas 1080×1920, 30fps cho đầu ra hiện tại. Tài nguyên chính phải đủ độ nét ở kích thước thực tế sau cắt và phóng to.
- Không chỉ kiểm kích thước file. Ảnh lớn nhưng nén nặng, mờ hoặc phóng từ ảnh nhỏ vẫn không đạt.
- Nguồn rộng thường cần độ phân giải cao hơn nếu sẽ cắt dọc/cắt cận. Chọn dựa trên vùng còn lại sau cắt; không mặc định ảnh 1920px luôn đủ.
- Không kéo méo tỷ lệ người hoặc vật. Không dùng sharpening quá mạnh để giả độ nét.
- Tự chọn font có đủ glyph tiếng Việt và kiểm render thực tế. Ưu tiên font đang dùng trong dự án nếu đạt; nếu thiếu, tự chọn Noto Sans, DejaVu Sans hoặc Segoe UI có sẵn hợp lệ. Không yêu cầu duyệt đổi font thông thường; kiểm lại wrapping, trọng lượng chữ và safe zone.
- Phụ đề 42px, line-height 1,38, tối đa 2 dòng; x72–890, y1240, padding20×24, nền tối đủ tương phản. Chia lại đoạn khi tràn; không bỏ lời.
- Tô amber đúng từ đang đọc dựa trên mốc audio thực. Không gọi timing đoán là đã đồng bộ.
- Nội dung chính theo vùng V2: x72, y320, khung logic924×1100, scale0,82. Chữ/bảng/hành động quan trọng phải ở vùng an toàn; ảnh nền có thể phủ toàn khung.
- Mô phỏng che phía trên y0–225; phía dưới y1490–1920; bên phải x920–1080 từ y820. Đây là mốc tham chiếu, không bảo đảm cho mọi giao diện/thiết bị TikTok.
- Kiểm các thời điểm phóng to và chuyển động, không chỉ khung cuối. Loại lớp UI mô phỏng khi xuất.
- Nguồn đọc được và tách phụ đề; trong vùng V2, tham khảo cỡ logic23px ≈18,9px sau scale. Nếu không đọc được trên khung xem thử, cần tăng hoặc chia bố cục.
- Không viết quá nhiều chữ. Tiêu đề/chữ nhấn nêu ý chính; phụ đề giữ đủ lời; hình minh họa bổ sung thay vì ba lớp cùng lặp một câu.

## 19. Chuyển động, máy quay và nhịp

### 19.1 Bốn loại chuyển động cần phân biệt

| Loại | Công dụng | Điều kiện |
|---|---|---|
| Hành động thật | Cầm, đặt, mở, ăn, đi, vận hành | Có video hành động đúng; không gọi ảnh tĩnh là hành động thật |
| Chuyển động máy | Cắt cận, pan, zoom nhẹ, đổi góc | Làm rõ chi tiết; không zoom tới mờ hoặc cắt mất đối tượng |
| Sơ đồ động | Đường nối, nhánh, từng bước, dữ liệu | Quan hệ và số liệu đúng; hiện theo lời đọc |
| Nhấn đồ họa | Khoanh, gạch, chú thích, highlight | Nhấn một ý rõ; không phủ đầy khung |

### 19.2 Nhịp mặc định

- Hướng tới một thay đổi có ý nghĩa khoảng 2–3 giây khi phù hợp: hành động mới, góc cận, bước tiếp theo, nhãn hoặc chi tiết mới.
- Không bắt cắt cảnh theo đồng hồ nếu thao tác cần lâu hơn để hiểu.
- Mở đầu nhìn thấy tình huống/đối tượng cụ thể ngay; không dùng nền trống và tiêu đề kéo dài.
- Phát hiện/cảnh báo: tăng nhấn vừa đủ bằng cận cảnh, tương phản hoặc đồ họa. Giải thích/hướng dẫn: giảm nhiễu, cho người xem thời gian hiểu.
- Chuyển cảnh cơ sở8frames ở30fps theo V2; có thể giữ cảnh liên tục khi hành động cần liền mạch. Không dùng transition làm mất lời, đổi nghĩa hoặc che lỗi.
- Một ảnh có thể pan/zoom để làm rõ; nếu dùng nhiều ảnh tĩnh liên tiếp, phải có tiến triển khác nhau, tránh mọi cảnh cùng một kiểu zoom.
- Không tạo parallax trên mặt phẳng thiếu lớp làm vật bị biến dạng. Không gọi parallax là chuyển động thật của vật thể.
- Không nhấp nháy, rung hoặc SFX liên tục. Các hiệu ứng phải phục vụ ý đang nói.

### 19.3 Kiểm liên tục theo thời gian

Với video AI, kiểm đầu/giữa/cuối, các điểm tương tác và toàn đoạn khi khả năng cho phép. Tìm thay đổi mặt, tay, số chi, hình vật, logo, chữ, bề mặt, hướng đi, tiếp xúc và đồ vật biến mất. Một khung đẹp không đủ chứng minh cả clip đạt.

## 20. Yêu cầu viết mô tả tài nguyên và tránh lỗi

Một yêu cầu tạo/tìm hình cần nêu đủ các phần có liên quan, không chỉ “chén cơm đẹp, chân thực”:

1. Đối tượng chính và đặc điểm phải đúng.
2. Hành động/trạng thái cụ thể.
3. Bối cảnh và đạo cụ cần thiết.
4. Góc máy, khoảng cách và vị trí trọng tâm.
5. Ánh sáng, chất liệu, màu tự nhiên.
6. Bố cục dọc và vùng cần chừa cho chữ.
7. Thuộc tính giữ nhất quán giữa các cảnh.
8. Chi tiết cần tránh: thừa ngón, chữ giả, vật lơ lửng, bóng nhựa, tỷ lệ sai hoặc sai loài tùy đối tượng.
9. Tính xác thực: ảnh minh họa chung hay tư liệu cần đúng đối tượng cụ thể.

Mô tả chi tiết chỉ là đầu vào. Không được coi một prompt tốt là hình đã đạt. Phải kiểm kết quả thực tế, nhất là hình dạng, tay, chữ và đúng hành động.

Ví dụ chén cơm: “Cận cảnh chén sứ trắng đựng cơm trắng đã nấu, hạt cơm không đồng đều tự nhiên, đặt trên bàn bếp gỗ, ánh sáng cửa sổ mềm từ bên trái, góc nhìn hơi cao thấy miệng và thân chén, bóng tiếp xúc rõ, không chữ/logo, bố cục dọc, chừa vùng trên cho tiêu đề; không dạng hoạt hình, không cơm như viên nhựa”.

Ví dụ tủ lạnh: “Góc trung của tủ lạnh gia đình đang mở, nhìn rõ khoang, kệ và chiều sâu, một hộp cơm nông có nắp được đặt lên kệ, ánh sáng bếp tự nhiên và ánh sáng trong tủ nhất quán; giữ cùng hộp và bếp với cảnh trước; không tủ như hình chữ nhật phẳng, không tay xuyên hộp”. Nếu cần hành động đặt hộp chính xác, ưu tiên video thật; ảnh tĩnh chỉ minh họa trạng thái sau thao tác.

## 21. Quy trình tự kiểm bắt buộc cho mọi video

### Cổng A — Khớp nội dung và nguồn

Lập bảng theo từng cảnh: đoạn lời → ý người xem cần hiểu → đối tượng/hành động → loại tài nguyên → yêu cầu xác thực → nguồn/quyền → điểm nhấn/chuyển động. Không chọn hình trước rồi ép nghĩa vào lời.

Không đạt nếu thiếu hình quan trọng, sai đối tượng/hành động, nguồn không phù hợp hoặc hình gây hiểu sai sự kiện/claim.

### Cổng B — Chất lượng tài nguyên

Inspect tài nguyên thật. Kiểm hình dạng, chất liệu, ánh sáng, tiếp xúc, phối cảnh, bối cảnh, độ nét, chữ và các bộ phận dễ lỗi. Kiểm video theo thời gian. Hình có lỗi lớn phải thay; không chuyển tiếp vì “sửa lúc render”.

### Cổng C — Khung hình đại diện trước render toàn bộ

Xem ít nhất một khung đủ nội dung của mỗi cảnh; xem thêm khung khi có nhiều trạng thái, bảng, zoom hoặc tương tác. Kiểm trọng tâm, bố cục, độ đọc, phụ đề và UI mô phỏng. Kiểm nhất quán toàn video bằng bảng khung đại diện.

AI thực hiện bước này nội bộ nếu có công cụ. Không mặc định bắt người dùng phê duyệt từng lần. Khi công cụ không xem được, ghi đúng giới hạn; không ghi PASS giả.

### Cổng D — Bản video thực tế

Sau render: kiểm định dạng và giải mã; xem chuyển cảnh/zoom/hoạt động, phụ đề, sự nhất quán và ý nghĩa thực tế. Nghe lời đọc để kiểm phát âm, nhịp và đồng bộ nếu có khả năng. Kiểm ảnh tĩnh không thay việc xem video liên tục. Kiểm dữ liệu âm lượng không thay việc nghe.

### Cổng E — Kết luận có bằng chứng

Mỗi mục có PASS / FAIL / NOT_RUN / UNAVAILABLE và tham chiếu tài nguyên hoặc timestamp. Lỗi nào sửa lỗi đó; không tự cho điểm tổng cao để bù lỗi lớn. Nếu nghe/xem còn thiếu thì ghi chưa hoàn tất QA; render thành công không tự là chất lượng hoàn tất hoặc publish-ready.

Người dùng chỉ cần nhận bản xuất, phần kết quả và những giới hạn còn thực sự ảnh hưởng. Không phải điền một biểu mẫu kỹ thuật.

## 22. Lỗi phải loại ngay

- Người/động vật có cấu trúc méo rõ, bộ phận thừa hoặc biến dạng khi di chuyển.
- Đồ vật chính không nhận ra được hoặc nhìn như đồ chơi ngoài chủ đích.
- Chén cơm, thiết bị hoặc căn phòng được vẽ quá sơ sài để thay tài nguyên đời thực.
- Thực phẩm sai loại/trạng thái; thao tác không thực sự diễn ra như lời nói.
- Nhãn, con số, nguồn, biểu đồ hoặc bản đồ sai/bịa.
- Hình minh họa bị trình bày như bằng chứng hiện trường hoặc tác dụng thực tế.
- Tài nguyên sai địa điểm, sai sự kiện, sai mẫu sản phẩm hoặc sai loài khi điều đó có ý nghĩa.
- Vật lơ lửng, tay xuyên vật, phối cảnh sai hoặc bóng sai rõ rệt.
- Ảnh mờ khi xuất, kéo giãn tỷ lệ, watermark ngoài phạm vi được phép.
- Chữ quan trọng/phụ đề bị cắt, che hoặc quá nhỏ để đọc.
- Hiệu ứng hoặc cắt nhanh được dùng để che tài nguyên không đạt.
- Cảnh nối tiếp đổi người/vật/bối cảnh vô lý hoặc tạo quan hệ sai.

Không “tạm chấp nhận” các lỗi này chỉ vì video đã chạy được hoặc đã tốn thời gian dựng.

## 23. Bộ kiểm tra nghiệm thu ngắn gọn

| Mục | Câu hỏi nghiệm thu | Bằng chứng cần có |
|---|---|---|
| Đúng ý | Hình có thể hiện đúng đối tượng, hành động và trạng thái đang nói? | Đoạn lời + frame/clip |
| Nhận diện | Người xem có nhận ra vật/người/loài mà không cần đọc nhãn? | Tài nguyên ở cỡ xem thực tế |
| Giống thật | Hình đời thực có hình dạng, chất liệu, ánh sáng và tiếp xúc hợp lý? | Khung cận hoặc đoạn tương tác |
| Đẹp | Trọng tâm rõ, màu tự nhiên, không rối, không mờ? | Khung đủ cảnh |
| Sinh động | Có tiến triển/hành động/góc nhìn giúp hiểu, không chỉ trang trí? | Timeline và video |
| Liên tục | Cùng người/vật/câu chuyện giữ đặc điểm và hành động hợp lý? | Khung đầu/giữa/cuối, đoạn nối |
| Chính xác | Chữ, số, bảng, bản đồ và cơ chế đúng nguồn? | Dữ liệu/nguồn + hình xuất |
| Trung thực | Tư liệu và minh họa được phân biệt khi cần? | Nhãn + nguồn |
| Đọc được | Chữ và phụ đề rõ trên khung dọc, trong vùng tránh che? | Khung UI mô phỏng |
| Chuyển động | Không méo, nhảy, xuyên vật hoặc cắt mất chi tiết khi zoom? | Video thực tế |
| Audio/sync | Lời rõ, đủ, phụ đề khớp khi nghe/xem? | Review artifact với timestamp |

Chỉ ghi PASS ở mục đã kiểm và có bằng chứng. Bất kỳ mục quan trọng FAIL phải sửa; mục quan trọng chưa kiểm không được coi đã hoàn tất QA.

## 24. Những gì phải lưu để video sau áp dụng nhất quán

- Chuẩn này và phiên bản đang dùng.
- Script đã duyệt, bảng cảnh và lời tương ứng.
- Tài nguyên gốc, nguồn/quyền, nhãn tư liệu hoặc minh họa.
- Mô tả tạo hình và tham chiếu cần giữ nhất quán nếu dùng AI.
- Các mốc audio/phụ đề thực, timeline và mã nguồn dựng.
- Khung đại diện, báo cáo kiểm tra và các lỗi đã sửa.
- Bản xuất và metadata; không tự ghi là đã đăng.

Không cần tăng phiên bản chuẩn khi thay ảnh xấu, sửa méo tay, sửa nguồn, đổi góc cắt hoặc điều chỉnh bố cục trong phạm vi chuẩn. Chỉ đề xuất thay chuẩn khi xuất hiện xung đột mang tính hệ thống, thay đổi phương pháp/chi phí/quyền hoặc yêu cầu mới ngoài phạm vi đã thống nhất.

## 25. Ví dụ áp dụng cho các chủ đề khác nhau

| Chủ đề | Hình đời thực | Đồ họa hỗ trợ | Không chấp nhận |
|---|---|---|---|
| Cơm qua đêm | Chén cơm, hộp nông, thao tác cất lạnh | Cơ chế bào tử/độc tố, mốc1giờ/24giờ | Chén cơm như icon, tủ lạnh phẳng, mốc giả |
| Đi bộ sau ăn | Người đi bộ trong bối cảnh phù hợp | Cơ chế/biểu đồ chỉ khi có nguồn | Hình người méo, đồ thị tự vẽ không dữ liệu |
| Chăm sóc thú cưng | Đúng loài, hành động và môi trường | Chú thích bộ phận hoặc quy trình | Sai loài, chân thừa, hành vi bịa |
| Mua đồ gia dụng | Sản phẩm thật/giống thật, bộ phận cần so sánh | Bảng thông số có nguồn | Logo/chữ giả, tính năng chưa xác minh |
| Bảo mật ngân hàng | Thiết bị và thao tác hợp lý | Giao diện mockup rõ, sơ đồ luồng | App giả tính năng, chữ méo, dữ liệu cá nhân |
| Thiên tai/tin tức | Tư liệu đúng sự kiện khi có | Bản đồ/dòng thời gian đã kiểm | Hình AI hoặc sự kiện khác giả hiện trường |
| Logistics | Kho, xe, máy, thao tác đúng | Quy trình/số liệu có cơ sở | Cảnh kho sai thao tác, năng suất bịa |
| Tài chính | Tình huống và đối tượng liên quan | Biểu đồ dữ liệu thật, giả định có nhãn | Đồ thị trang trí gây hiểu sai lợi nhuận |
| Lịch sử/khoa học | Tư liệu thật hoặc tái dựng có nhãn | Sơ đồ/cấu tạo chính xác | Tái dựng bị gọi là ảnh tư liệu thật |

## 26. Cam kết vận hành của chuẩn

Mỗi chủ đề mới được phân loại và áp dụng cùng các cổng kiểm. Người dùng không phải nhắc lại “hình giống thật” cho mỗi video. Khi một clip chưa đạt, cần sửa việc chọn/tạo/dựng/kiểm tài nguyên trong chuẩn này trước khi đề xuất nâng cấp chuẩn.

Không cam kết mọi công cụ đều tạo ảnh đúng ngay lần đầu, mọi nguồn đều có sẵn, hoặc mọi thiết bị TikTok có giao diện giống nhau. Giới hạn thật cần được báo đúng, không được che bằng hình sơ sài hoặc tuyên bố QA chưa thực hiện.

Chuẩn hình ảnh không tự cấp quyền mua tài nguyên, clone người/giọng, tạo chứng cứ giả, đổi lời đã duyệt hoặc cài skill. Người dùng đã yêu cầu tích hợp chuẩn này vào skill V2 hiện hữu ngày 10/10/2026. Giữ baseline cũ trong references/baseline-20261010; không tự tạo V3.

## Bổ sung nhận diện đối tượng đích danh

Đọc và áp dụng [named-subjects.md](named-subjects.md): ưu tiên ảnh thực tế trên mạng đúng tên/nhận diện/bối cảnh; ảnh tạo phải giữ đúng đối tượng, kiểm theo tham chiếu và không giả tư liệu thật. Quy tắc này ưu tiên hơn lựa chọn ảnh minh họa chung khi script gọi tên cụ thể.
