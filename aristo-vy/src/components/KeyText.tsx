import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {EASE} from '../theme';

// Keytext vào bằng fade + blur + trượt rất nhẹ. Không pop, không bounce.
export const KeyText: React.FC<{
	delay?: number;
	duration?: number;
	exitAt?: number;
	style?: React.CSSProperties;
	children: React.ReactNode;
}> = ({delay = 0, duration = 24, exitAt, style, children}) => {
	const frame = useCurrentFrame();
	const t = interpolate(frame, [delay, delay + duration], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: EASE,
	});
	const out =
		exitAt === undefined
			? 1
			: interpolate(frame, [exitAt, exitAt + 15], [1, 0], {
					extrapolateLeft: 'clamp',
					extrapolateRight: 'clamp',
					easing: EASE,
				});
	return (
		<div
			style={{
				opacity: t * out,
				filter: `blur(${(1 - t) * 12 + (1 - out) * 8}px)`,
				transform: `translateY(${(1 - t) * 18}px)`,
				...style,
			}}
		>
			{children}
		</div>
	);
};
