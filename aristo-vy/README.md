# The Aristo – Motion graphics phần Vỹ

Dự án Remotion dựng các cảnh motion graphics trong phần Vỹ (chương B "Khan hiếm" B1–B9, title C1, cảnh C2), theo tài liệu
[The Aristo – Kế hoạch sản xuất phần Vỹ](https://claude.ai/artifact/PoaezvrkQo1kroXBwdzCnj).

## Đã dựng

| Composition | Cảnh | Thời lượng | Trạng thái số liệu |
| --- | --- | --- | --- |
| `PhanVy` | Animatic toàn phần B → C2 | 145 s | Cảnh chưa có footage là khung chờ, giữ đúng thời lượng |
| `B-Title` | Title KHAN HIẾM + 5 ý con | 5 s | Xong |
| `B4-PhanTang` | Mặt cắt 13 tầng, 4 dải sáng dần | 9 s | TẠM: lỗi #5, #6, #8 |
| `B6-CoCauCan` | 4 cột 29 / 50 / 37 / 6, gom 1PN + 2PN | 12 s | TẠM: lỗi #3, #4; chưa có diện tích |
| `B8-ThanhToan` | Timeline thanh toán màu đồng | 12 s | BỊ CHẶN: lỗi #1 (24 hay 18 tháng), các mốc là placeholder |
| `B9-NganHang` | 4 logo → điều kiện vay → DỄ CHỌN · DỄ MUA · DỄ SỞ HỮU | 17 s | BỊ CHẶN: lỗi #2, chưa có logo |
| `C1-Title` | Title TINH HOA CHẮT LỌC (nền ngà) | 6 s | Xong |
| `C2-DonVi` | 6 đơn vị × 4,5 s + 8 s Staycation | 35 s | Chờ logo và render chi tiết |

B1, B2, B3, B5 và B7 cần footage hoặc render thật (3D, flycam, AI video), nên trong `PhanVy` chúng là khung chờ có nhãn ý con ở góc.

## Chạy

```bash
npm install
```

```bash
npm run dev
```

Studio mở ở http://localhost:3000. Xuất animatic:

```bash
npm run render:all
```

Xuất riêng một cảnh, ví dụ B6:

```bash
npx remotion render B6-CoCauCan out/B6.mp4
```

Xuất ProRes để ghép trong After Effects / Premiere:

```bash
npx remotion render B6-CoCauCan out/B6.mov --codec=prores --prores-profile=hq
```

## Thay số liệu và asset

- **Mọi chữ và số trên hình** nằm trong `src/data.ts`. Mục có chú thích "TẠM" / "BỊ CHẶN" là chờ chị Dung xác nhận theo bảng lỗi dữ liệu trong doc.
- **Logo ngân hàng**: đặt SVG/PNG vào `public/banks/`, rồi điền `logo: 'banks/ten-file.svg'` trong `BANKS`.
- **Render chi tiết C2**: đặt ảnh vào `public/partners/`, rồi điền `image: 'partners/byg.jpg'` trong `PARTNERS`.
- **Màu, font, easing**: `src/theme.ts`. Font tạm là Cormorant Garamond (tiêu đề) và Be Vietnam Pro (số liệu), đều có dấu tiếng Việt. Thay bằng font guideline khi có.
- **Thời lượng từng cảnh**: mảng `SCENES` trong `src/data.ts`. Chỉnh lại khi có voice thật.
- **FPS / độ phân giải**: `src/theme.ts` (đang để 1920×1080, 30 fps; doc còn câu hỏi mở về codec bàn giao).

## Cấu trúc

```
src/
  data.ts            số liệu, chữ, thời lượng (sửa ở đây)
  theme.ts           màu, font, easing
  Root.tsx           đăng ký composition
  PhanVy.tsx         animatic toàn phần
  components/        Background, BronzeLine, KeyText, CountUp, ChapterTag, Placeholder
  scenes/            TitleCard, B4FloorStack, B6UnitMix, B8Payment, B9Banks, C2Partners
```

Lưu ý giấy phép: Remotion miễn phí cho cá nhân và công ty tối đa 3 nhân viên. Nếu đơn vị sản xuất lớn hơn thì cần Company License (remotion.dev/license).
