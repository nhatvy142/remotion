import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Background} from '../components/Background';
import {BronzeLine} from '../components/BronzeLine';
import {ChapterTag} from '../components/ChapterTag';
import {KeyText} from '../components/KeyText';
import {PAYMENT} from '../data';
import {COLORS, EASE, SANS, SERIF} from '../theme';

// B8: timeline ngang màu đồng, các mốc thanh toán hiện dần.
const X0 = 220;
const X1 = 1700;
const Y = 600;

export const B8Payment: React.FC = () => {
	const frame = useCurrentFrame();
	const lineStart = 30;
	const lineDur = 150;
	const xAt = (m: number) => X0 + (m / PAYMENT.months) * (X1 - X0);
	const reachFrame = (m: number) => lineStart + (m / PAYMENT.months) * lineDur;

	return (
		<Background>
			<ChapterTag active={3} />
			<AbsoluteFill style={{left: 140, top: 140}}>
				<KeyText delay={4}>
					<div style={{fontFamily: SERIF, fontWeight: 300, fontSize: 64, color: COLORS.ivory, letterSpacing: '0.1em'}}>
						{PAYMENT.title}
					</div>
				</KeyText>
				<KeyText delay={14}>
					<div
						style={{
							fontFamily: SANS,
							fontWeight: 300,
							fontSize: 28,
							color: COLORS.bronze,
							letterSpacing: '0.24em',
							marginTop: 16,
						}}
					>
						ĐẾN {PAYMENT.months} THÁNG
					</div>
				</KeyText>
			</AbsoluteFill>
			<svg width="100%" height="100%" viewBox="0 0 1920 1080" style={{position: 'absolute'}}>
				<BronzeLine d={`M${X0} ${Y} L${X1} ${Y}`} delay={lineStart} duration={lineDur} width={2} glow />
				{PAYMENT.milestones.map((m) => {
					const f = reachFrame(m.at);
					const s = interpolate(frame, [f, f + 18], [0, 1], {
						extrapolateLeft: 'clamp',
						extrapolateRight: 'clamp',
						easing: EASE,
					});
					return (
						<circle
							key={m.label}
							cx={xAt(m.at)}
							cy={Y}
							r={10 * s}
							fill={COLORS.charcoal}
							stroke={COLORS.bronze}
							strokeWidth={2}
						/>
					);
				})}
			</svg>
			{PAYMENT.milestones.map((m, i) => {
				const f = reachFrame(m.at);
				const above = i % 2 === 0;
				return (
					<div
						key={m.label}
						style={{
							position: 'absolute',
							left: xAt(m.at) - 150,
							width: 300,
							top: above ? Y - 170 : Y + 40,
							textAlign: 'center',
						}}
					>
						<KeyText delay={f + 6}>
							<div style={{fontFamily: SANS, fontWeight: 200, fontSize: 64, color: COLORS.ivory}}>{m.value}</div>
							<div
								style={{
									fontFamily: SANS,
									fontWeight: 300,
									fontSize: 22,
									color: COLORS.bronze,
									letterSpacing: '0.16em',
									marginTop: 4,
								}}
							>
								{m.label.toUpperCase()}
							</div>
						</KeyText>
					</div>
				);
			})}
			<div style={{position: 'absolute', left: 0, right: 0, bottom: 70, textAlign: 'center'}}>
				<KeyText delay={lineStart + lineDur}>
					<div style={{fontFamily: SANS, fontWeight: 300, fontSize: 18, color: COLORS.ivoryDim, fontStyle: 'italic'}}>
						{PAYMENT.note}
					</div>
				</KeyText>
			</div>
		</Background>
	);
};
