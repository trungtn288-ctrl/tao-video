# AI Script Factory — Registry
Mã registry tham chiếu cho AI Script Factory. Bộ 25 nguồn V2.4.6 chưa được công khai trong repository này.
## Trạng thái
- Mã registry tham chiếu đã chuẩn bị; 13 kiểm tra lõi cục bộ PASS.
- Chưa triển khai dịch vụ registry Cloud, chưa có endpoint dùng chung hoặc connector gọi từ ChatGPT.
- Registry vẫn UNAVAILABLE cho runtime Script Factory. Push GitHub/CI PASS không tương đương deployment.
## Chạy kiểm thử
Node có node:sqlite (Dockerfile dùng Node24).
npm test
## Khởi chạy dịch vụ
REGISTRY_DB phải nằm trên persistent local volume; REGISTRY_TOKEN bí mật ít nhất32 ký tự; REGISTRY_LEASE_SECONDS theo policy operator cấu hình, không có TTL mặc định. HOST mặc định127.0.0.1; PORT mặc định8080.
npm start
Chỉ vận hành một host/service với SQLite trên volume bền vững. Không dùng scratch/task container làm kho lâu dài, không shareSQLite qua nhiều host.
Expose authenticated HTTPS qua ingress và kết nối một tool dùng chung cho các chat. Chưa có tool thì ChatGPT không tự gọi endpoint chỉ bằng instructions.
API: POST /initialize, GET /snapshot?project=..., POST /transaction. Auth Bearer token; không ghi token trongrepo/log.
## Giới hạn
Backend kiểm CAS/lease/lifecycle/evidence-reference coverage; không tự chứng minh semantic novelty. AI client phải so nghĩa toàn blocking set và batch từ snapshot fresh, lưu evidence thật, CAS conflict refresh/recheck. Snapshot refs cần immutable shared storage; service tham chiếu hiện chưa tạo/verify object store.
## Acceptance deployment
Actual persistence qua restart, negative-CAS concurrent clients, expired-owner fencing, approved-edit integrity, storage evidence refs, tool connectivity từ các chat, global semantic duplicate tests. Chỉ sau actual evidence mới registry AVAILABLE.
Không render/auto-publish nội dung.
