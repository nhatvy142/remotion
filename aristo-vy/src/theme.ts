import {Easing} from 'remotion';
import {loadFont as loadSerif} from '@remotion/google-fonts/CormorantGaramond';
import {loadFont as loadSans} from '@remotion/google-fonts/BeVietnamPro';

// Guideline tạm (xem doc "Kế hoạch sản xuất phần Vỹ"): nền than chì / ngà đá,
// line + số màu đồng champagne, chữ ngà. Không vàng chói, đỏ, neon.
export const COLORS = {
	charcoal: '#17181a',
	charcoalSoft: '#24262a',
	ivory: '#efe8dc',
	ivoryDim: 'rgba(239, 232, 220, 0.62)',
	travertine: '#e4dacb',
	bronze: '#c6a57a',
	bronzeDeep: '#9c7d55',
	bronzeGlow: 'rgba(198, 165, 122, 0.35)',
	ink: '#2a2622',
};

// Tối đa 2 font, có dấu tiếng Việt. Thay bằng font của guideline khi chị Dung gửi.
export const SERIF = loadSerif('normal', {
	weights: ['300', '400', '500'],
	subsets: ['latin', 'vietnamese'],
}).fontFamily;

export const SANS = loadSans('normal', {
	weights: ['200', '300', '400'],
	subsets: ['latin', 'vietnamese'],
}).fontFamily;

export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;

// Chuyển động chậm, có trọng lượng, không bounce / pop.
export const EASE = Easing.bezier(0.33, 0, 0.12, 1);
export const EASE_IN_OUT = Easing.bezier(0.6, 0, 0.2, 1);

export const sec = (s: number) => Math.round(s * FPS);
