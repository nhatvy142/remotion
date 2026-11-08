import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {CHAPTER_ITEMS} from '../data';
import {COLORS, EASE, SANS} from '../theme';

// Nhãn nhỏ góc màn hình: 5 ý con của chương B, ý đang nói sáng lên.
export const ChapterTag: React.FC<{active: number; onLight?: boolean}> = ({
	active,
	onLight,
}) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const o = Math.min(
		interpolate(frame, [6, 30], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE}),
		interpolate(frame, [durationInFrames - 15, durationInFrames], [1, 0], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}),
	);
	const dim = onLight ? 'rgba(42,38,34,0.35)' : 'rgba(239,232,220,0.32)';
	return (
		<div
			style={{
				position: 'absolute',
				top: 64,
				right: 80,
				display: 'flex',
				gap: 22,
				alignItems: 'center',
				fontFamily: SANS,
				fontWeight: 300,
				fontSize: 17,
				letterSpacing: '0.28em',
				opacity: o,
			}}
		>
			{CHAPTER_ITEMS.map((item, i) => (
				<div
					key={item}
					style={{
						color: i === active ? COLORS.bronze : dim,
						display: 'flex',
						alignItems: 'center',
						gap: 22,
					}}
				>
					{i > 0 ? <span style={{color: dim}}>·</span> : null}
					{item}
				</div>
			))}
		</div>
	);
};
