import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Background} from '../components/Background';
import {BronzeLine} from '../components/BronzeLine';
import {ChapterTag} from '../components/ChapterTag';
import {KeyText} from '../components/KeyText';
import {FLOOR_BANDS, TOTAL_FLOORS} from '../data';
import {COLORS, EASE, SANS, SERIF} from '../theme';

// B4: mặt cắt tòa nhà, 4 dải tầng sáng lần lượt từ dưới lên.
const FLOOR_H = 52;
const TOWER_W = 420;
const TOWER_X = 520;
const BASE_Y = 960;

export const B4FloorStack: React.FC = () => {
	const frame = useCurrentFrame();
	const topY = BASE_Y - TOTAL_FLOORS * FLOOR_H;
	const outline = `M${TOWER_X} ${BASE_Y} L${TOWER_X} ${topY} L${TOWER_X + TOWER_W} ${topY} L${TOWER_X + TOWER_W} ${BASE_Y} Z`;
	const bandStart = (i: number) => 40 + i * 50;

	return (
		<Background>
			<ChapterTag active={2} />
			<svg width="100%" height="100%" viewBox="0 0 1920 1080" style={{position: 'absolute'}}>
				<BronzeLine d={`M320 ${BASE_Y} L1180 ${BASE_Y}`} duration={30} width={1} />
				<BronzeLine d={outline} duration={50} width={1.5} />
				{/* vạch sàn từng tầng */}
				{Array.from({length: TOTAL_FLOORS - 1}).map((_, i) => {
					const y = BASE_Y - (i + 1) * FLOOR_H;
					return (
						<BronzeLine
							key={i}
							d={`M${TOWER_X} ${y} L${TOWER_X + TOWER_W} ${y}`}
							delay={14 + i * 2}
							duration={20}
							width={0.6}
							color={COLORS.bronzeDeep}
						/>
					);
				})}
				{FLOOR_BANDS.map((band, i) => {
					const [from, to] = band.floors;
					const y = BASE_Y - to * FLOOR_H;
					const h = (to - from + 1) * FLOOR_H;
					const o = interpolate(frame, [bandStart(i), bandStart(i) + 25], [0, 1], {
						extrapolateLeft: 'clamp',
						extrapolateRight: 'clamp',
						easing: EASE,
					});
					const midY = y + h / 2;
					return (
						<g key={band.label}>
							<rect
								x={TOWER_X + 1}
								y={y + 1}
								width={TOWER_W - 2}
								height={h - 2}
								fill={COLORS.bronze}
								opacity={o * 0.22}
							/>
							<BronzeLine
								d={`M${TOWER_X + TOWER_W + 16} ${midY} L${TOWER_X + TOWER_W + 120} ${midY}`}
								delay={bandStart(i) + 8}
								duration={20}
								width={1}
							/>
						</g>
					);
				})}
			</svg>
			{FLOOR_BANDS.map((band, i) => {
				const [from, to] = band.floors;
				const y = BASE_Y - to * FLOOR_H;
				const midY = y + ((to - from + 1) * FLOOR_H) / 2;
				const floorsLabel = from === to ? `TẦNG ${from}` : `TẦNG ${from}–${to}`;
				return (
					<div
						key={band.label}
						style={{position: 'absolute', left: TOWER_X + TOWER_W + 140, top: midY - 40}}
					>
						<KeyText delay={bandStart(i) + 14}>
							<div style={{display: 'flex', alignItems: 'baseline', gap: 26}}>
								<span
									style={{
										fontFamily: SANS,
										fontWeight: 200,
										fontSize: 22,
										letterSpacing: '0.25em',
										color: COLORS.bronze,
										minWidth: 170,
									}}
								>
									{floorsLabel}
								</span>
								<span style={{fontFamily: SERIF, fontSize: 46, color: COLORS.ivory, letterSpacing: '0.08em'}}>
									{band.label}
								</span>
							</div>
							<div
								style={{
									fontFamily: SANS,
									fontWeight: 300,
									fontSize: 22,
									color: COLORS.ivoryDim,
									marginLeft: 196,
									marginTop: 4,
								}}
							>
								{band.detail}
							</div>
						</KeyText>
					</div>
				);
			})}
			<AbsoluteFill style={{left: 140, top: 140}}>
				<KeyText delay={6}>
					<div style={{fontFamily: SERIF, fontSize: 64, color: COLORS.ivory, letterSpacing: '0.1em', fontWeight: 300}}>
						{TOTAL_FLOORS} TẦNG NỔI
					</div>
				</KeyText>
			</AbsoluteFill>
		</Background>
	);
};
