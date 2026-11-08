import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Background} from '../components/Background';
import {ChapterTag} from '../components/ChapterTag';
import {CountUp} from '../components/CountUp';
import {KeyText} from '../components/KeyText';
import {UNIT_MIX, UNIT_MIX_CLAIM} from '../data';
import {COLORS, EASE, SANS, SERIF, sec} from '../theme';

// B6: 4 cột cơ cấu căn, số đếm lên; cụm 1PN + 2PN được gom và highlight.
const COL_W = 200;
const GAP = 120;
const MAX_H = 440;
const BASE_Y = 820;

export const B6UnitMix: React.FC = () => {
	const frame = useCurrentFrame();
	const total = UNIT_MIX.reduce((s, u) => s + u.count, 0);
	const max = Math.max(...UNIT_MIX.map((u) => u.count));
	const startX = (1920 - (UNIT_MIX.length * COL_W + (UNIT_MIX.length - 1) * GAP)) / 2;
	const highlighted = UNIT_MIX.filter((u) => u.highlight);
	const hlCount = highlighted.reduce((s, u) => s + u.count, 0);
	const hlPct = (hlCount / total) * 100;
	const groupT = interpolate(frame, [sec(6), sec(7)], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: EASE,
	});
	const hlIdx = UNIT_MIX.map((u, i) => (u.highlight ? i : -1)).filter((i) => i >= 0);
	const groupX = startX + Math.min(...hlIdx) * (COL_W + GAP) - 30;
	const groupW = (Math.max(...hlIdx) - Math.min(...hlIdx)) * (COL_W + GAP) + COL_W + 60;

	return (
		<Background>
			<ChapterTag active={2} />
			<AbsoluteFill style={{left: 140, top: 140}}>
				<KeyText delay={4}>
					<div style={{fontFamily: SERIF, fontWeight: 300, fontSize: 64, color: COLORS.ivory, letterSpacing: '0.1em'}}>
						<CountUp to={total} delay={4} duration={40} /> KHÔNG GIAN SỐNG
					</div>
				</KeyText>
			</AbsoluteFill>
			{/* khung gom 1PN + 2PN */}
			<div
				style={{
					position: 'absolute',
					left: groupX,
					top: BASE_Y - MAX_H - 130,
					width: groupW,
					height: MAX_H + 260,
					border: `1px solid ${COLORS.bronze}`,
					opacity: groupT,
					boxShadow: `0 0 40px ${COLORS.bronzeGlow}`,
				}}
			/>
			{UNIT_MIX.map((u, i) => {
				const d = 24 + i * 12;
				const grow = interpolate(frame, [d, d + 45], [0, 1], {
					extrapolateLeft: 'clamp',
					extrapolateRight: 'clamp',
					easing: EASE,
				});
				const h = (u.count / max) * MAX_H * grow;
				const x = startX + i * (COL_W + GAP);
				const dimmed = !u.highlight ? 1 - groupT * 0.55 : 1;
				return (
					<div key={u.type} style={{opacity: dimmed}}>
						<div
							style={{
								position: 'absolute',
								left: x,
								top: BASE_Y - h,
								width: COL_W,
								height: h,
								background: `linear-gradient(180deg, ${COLORS.bronze} 0%, ${COLORS.bronzeDeep} 100%)`,
								opacity: 0.85,
							}}
						/>
						<div
							style={{
								position: 'absolute',
								left: x,
								width: COL_W,
								top: BASE_Y - h - 100,
								textAlign: 'center',
								fontFamily: SANS,
								fontWeight: 200,
								fontSize: 76,
								color: COLORS.ivory,
								opacity: grow,
							}}
						>
							<CountUp to={u.count} delay={d} duration={45} />
						</div>
						<div style={{position: 'absolute', left: x, width: COL_W, top: BASE_Y + 24, textAlign: 'center'}}>
							<KeyText delay={d + 10}>
								<div style={{fontFamily: SERIF, fontSize: 38, color: COLORS.bronze, letterSpacing: '0.1em'}}>
									{u.type}
								</div>
								<div style={{fontFamily: SANS, fontWeight: 300, fontSize: 20, color: COLORS.ivoryDim, marginTop: 6}}>
									{u.area} · {((u.count / total) * 100).toFixed(1).replace('.', ',')}%
								</div>
							</KeyText>
						</div>
					</div>
				);
			})}
			<div
				style={{
					position: 'absolute',
					left: groupX,
					width: groupW,
					top: BASE_Y + 150,
					textAlign: 'center',
					whiteSpace: 'nowrap',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<KeyText delay={sec(7)}>
					<div style={{fontFamily: SANS, fontWeight: 300, fontSize: 24, letterSpacing: '0.24em', color: COLORS.bronze}}>
						{UNIT_MIX_CLAIM} · {hlPct.toFixed(1).replace('.', ',')}%
					</div>
				</KeyText>
			</div>
		</Background>
	);
};
