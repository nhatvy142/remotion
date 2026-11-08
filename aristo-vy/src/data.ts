// TOÀN BỘ SỐ LIỆU / CHỮ TRÊN HÌNH NẰM Ở ĐÂY.
// Mục nào có "TẠM" là đang chờ chị Dung xác nhận (bảng "Lỗi dữ liệu" trong doc).

export const CHAPTER_ITEMS = ['VỊ TRÍ', 'SỐ LƯỢNG', 'SẢN PHẨM', 'ĐƠN GIÁ', 'TỔNG GIÁ'];

export const TITLE_B = {
	kicker: 'CHƯƠNG B',
	title: 'KHAN HIẾM',
	items: CHAPTER_ITEMS,
};

export const TITLE_C = {
	kicker: 'CHƯƠNG C',
	title: 'TINH HOA CHẮT LỌC',
	items: ['THIẾT KẾ', 'TRẢI NGHIỆM', 'CÔNG NĂNG'],
	footer: 'THUẦN KHIẾT 365 NGÀY NGHỈ DƯỠNG TẠI GIA – STAYCATION',
};

// B4 — TẠM: lỗi #5 (tầng 3–4 tiện ích hay điển hình?), #6 (tên căn tầng 13), #8 (căn hộ sân vườn)
export const FLOOR_BANDS = [
	{floors: [1, 2], label: 'KHỐI ĐẾ THƯƠNG MẠI', detail: '8 cửa hàng'},
	{floors: [3, 4], label: 'TẦNG TIỆN ÍCH', detail: 'Hồ bơi · vườn'},
	{floors: [5, 12], label: 'CĂN HỘ ĐIỂN HÌNH', detail: '1PN · 2PN · 3PN'},
	{floors: [13, 13], label: 'PENTHOUSE 2 TẦNG', detail: 'Vườn trên không'},
] as const;
export const TOTAL_FLOORS = 13;

// B6 — TẠM (diện tích chưa có, điền từ bảng cơ cấu căn chốt): lỗi #3 ("70%" sai toán → 79/122 = 64,8%), #4 (1PN 29 hay 28 + 1 Duplex), #6
export const UNIT_MIX = [
	{type: '1PN', count: 29, area: '— m²', highlight: true},
	{type: '2PN', count: 50, area: '— m²', highlight: true},
	{type: '3PN', count: 37, area: '— m²', highlight: false},
	{type: 'PENTHOUSE', count: 6, area: '— m²', highlight: false},
];
export const UNIT_MIX_CLAIM = 'GẦN 2/3 QUỸ CĂN 1 & 2 PHÒNG NGỦ';

// B8 — BỊ CHẶN: lỗi #1 (24 hay 18 tháng). Các mốc dưới đây là placeholder.
export const PAYMENT = {
	months: 24,
	title: 'THANH TOÁN DÀN TRẢI',
	milestones: [
		{at: 0, label: 'Ký HĐMB', value: '10%'},
		{at: 6, label: 'Tháng 6', value: '10%'},
		{at: 12, label: 'Tháng 12', value: '10%'},
		{at: 18, label: 'Tháng 18', value: '10%'},
		{at: 24, label: 'Nhận nhà', value: '60%'},
	],
	note: 'Theo chính sách chủ đầu tư tại thời điểm phát hành',
};

// B9 — BỊ CHẶN: lỗi #2 (điều kiện vay + tên 4 ngân hàng). Logo: thả file SVG vào public/banks/.
export const BANKS = [
	{name: 'NGÂN HÀNG 1', logo: null as string | null},
	{name: 'NGÂN HÀNG 2', logo: null as string | null},
	{name: 'NGÂN HÀNG 3', logo: null as string | null},
	{name: 'NGÂN HÀNG 4', logo: null as string | null},
];
export const LOAN_TERMS = [
	{big: '0%', small: 'LÃI SUẤT'},
	{big: 'ÂN HẠN', small: 'NỢ GỐC ĐẾN KHI NHẬN NHÀ'},
];
export const CLOSING_WORDS = ['DỄ CHỌN', 'DỄ MUA', 'DỄ SỞ HỮU'];

// C2 — Vỹ: template + 3 đơn vị đầu; Nhi / Yến: 3 đơn vị sau + Staycation.
// image: đường dẫn trong public/ (render chi tiết The Aristo), null = khung chờ.
export const PARTNERS = [
	{name: 'BYG', field: 'Kiến trúc · Mặt đứng', image: null as string | null},
	{name: 'VSCAPE', field: 'Cảnh quan', image: null as string | null},
	{name: 'ARTSY', field: 'Nội thất sảnh', image: null as string | null},
	{name: 'ASP', field: 'Cơ điện · BMS', image: null as string | null},
	{name: 'BOXY', field: 'Bảng hiệu', image: null as string | null},
	{name: 'ADORGREEN', field: 'Chứng chỉ công trình xanh', image: null as string | null},
];

// Thời lượng (giây) theo bảng "Phạm vi & thời lượng" — nhịp 2,3 từ/giây. Chốt lại khi có voice thật.
export const SCENES = [
	{id: 'B', sec: 5, chapterTag: null, desc: 'Title KHAN HIẾM'},
	{id: 'B1', sec: 6, chapterTag: 0, desc: '3D dọc trục Nguyễn Lương Bằng'},
	{id: 'B2', sec: 7.5, chapterTag: 0, desc: 'Flycam định vị S19-3 + S11'},
	{id: 'B3', sec: 13, chapterTag: 1, desc: 'Tòa nhà mọc lên + mũi tên chiều cao'},
	{id: 'B4', sec: 9, chapterTag: 2, desc: 'Infographic phân tầng'},
	{id: 'B5', sec: 10.5, chapterTag: 2, desc: 'Casa Luna → Triton Crown'},
	{id: 'B6', sec: 12, chapterTag: 2, desc: 'Cơ cấu căn hộ'},
	{id: 'B7', sec: 12, chapterTag: 3, desc: 'Gia đình trẻ trong căn hộ (AI)'},
	{id: 'B8', sec: 12, chapterTag: 3, desc: 'Lịch thanh toán'},
	{id: 'B9', sec: 17, chapterTag: 4, desc: '4 ngân hàng + DỄ CHỌN – DỄ MUA – DỄ SỞ HỮU'},
	{id: 'C1', sec: 6, chapterTag: null, desc: 'Title TINH HOA CHẮT LỌC'},
	{id: 'C2', sec: 35, chapterTag: null, desc: '6 đơn vị tư vấn thiết kế'},
] as const;
