import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {COLORS, EASE} from '../theme';

// Line đồng 1px tự vẽ ra (stroke-dashoffset). Dùng cho đường kẻ, viền, mũi tên.
export const BronzeLine: React.FC<{
	d: string;
	delay?: number;
	duration?: number;
	width?: number;
	color?: string;
	glow?: boolean;
}> = ({d, delay = 0, duration = 40, width = 1.5, color = COLORS.bronze, glow}) => {
	const frame = useCurrentFrame();
	const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: EASE,
	});
	return (
		<path
			d={d}
			pathLength={1}
			fill="none"
			stroke={color}
			strokeWidth={width}
			strokeLinecap="round"
			strokeDasharray={1}
			strokeDashoffset={1 - progress}
			style={glow ? {filter: `drop-shadow(0 0 6px ${COLORS.bronzeGlow})`} : undefined}
		/>
	);
};
