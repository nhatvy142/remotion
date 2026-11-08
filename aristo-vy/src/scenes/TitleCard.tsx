import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {Background} from '../components/Background';
import {BronzeLine} from '../components/BronzeLine';
import {KeyText} from '../components/KeyText';
import {COLORS, EASE, SANS, SERIF} from '../theme';

// Template title chung (B "KHAN HIẾM", C1 "TINH HOA CHẮT LỌC"). Khóa cùng Kha.
export const TitleCard: React.FC<{
	kicker: string;
	title: string;
	items: readonly string[];
	footer?: string;
	variant?: 'dark' | 'light';
}> = ({kicker, title, items, footer, variant = 'dark'}) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const dark = variant === 'dark';
	const text = dark ? COLORS.ivory : COLORS.ink;
	const sub = dark ? COLORS.ivoryDim : 'rgba(42,38,34,0.6)';
	const fadeOut = interpolate(frame, [durationInFrames - 18, durationInFrames], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: EASE,
	});

	return (
		<Background variant={variant}>
			<AbsoluteFill style={{opacity: fadeOut}}>
				{/* nét lá Acanthus đồng, vẽ từ góc phải dưới vào */}
				<svg width="100%" height="100%" viewBox="0 0 1920 1080" style={{position: 'absolute'}}>
					<BronzeLine
						d={
							dark
								? // B: lá Acanthus (cột Corinthian) — vị thế, sự hiếm
									'M1880 1040 C 1640 960, 1560 820, 1620 690 C 1670 580, 1800 600, 1780 700 C 1760 790, 1600 780, 1560 660 C 1520 540, 1600 420, 1420 360'
								: // C1: dòng nước — năng lượng nuôi dưỡng, Staycation
									'M1920 900 C 1700 860, 1560 980, 1340 940 C 1120 900, 1040 820, 820 880 C 640 930, 560 1010, 380 990'
						}
						duration={70}
						glow
					/>
					<BronzeLine d="M140 640 L 520 640" delay={20} duration={30} width={1} />
				</svg>
				<div style={{position: 'absolute', left: 140, top: 330}}>
					<KeyText delay={4}>
						<div
							style={{
								fontFamily: SANS,
								fontWeight: 300,
								fontSize: 22,
								letterSpacing: '0.5em',
								color: COLORS.bronze,
							}}
						>
							{kicker}
						</div>
					</KeyText>
					<KeyText delay={10} duration={30}>
						<div
							style={{
								fontFamily: SERIF,
								fontWeight: 300,
								fontSize: title.length > 12 ? 128 : 168,
								letterSpacing: '0.12em',
								color: text,
								lineHeight: 1.05,
								marginTop: 24,
							}}
						>
							{title}
						</div>
					</KeyText>
				</div>
				<div
					style={{
						position: 'absolute',
						left: 140,
						top: 680,
						display: 'flex',
						gap: 34,
						fontFamily: SANS,
						fontWeight: 300,
						fontSize: 24,
						letterSpacing: '0.3em',
						color: sub,
					}}
				>
					{items.map((item, i) => (
						<KeyText key={item} delay={34 + i * 8} duration={20}>
							<span>
								{i > 0 ? <span style={{color: COLORS.bronze, marginRight: 34}}>·</span> : null}
								{item}
							</span>
						</KeyText>
					))}
				</div>
				{footer ? (
					<div style={{position: 'absolute', left: 140, top: 760}}>
						<KeyText delay={34 + items.length * 8 + 6}>
							<div
								style={{
									fontFamily: SERIF,
									fontStyle: 'italic',
									fontSize: 30,
									letterSpacing: '0.12em',
									color: dark ? COLORS.bronze : COLORS.bronzeDeep,
								}}
							>
								{footer}
							</div>
						</KeyText>
					</div>
				) : null}
			</AbsoluteFill>
		</Background>
	);
};
