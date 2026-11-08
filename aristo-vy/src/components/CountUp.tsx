import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {EASE} from '../theme';

export const CountUp: React.FC<{
	to: number;
	delay?: number;
	duration?: number;
	suffix?: string;
	decimals?: number;
}> = ({to, delay = 0, duration = 45, suffix = '', decimals = 0}) => {
	const frame = useCurrentFrame();
	const v = interpolate(frame, [delay, delay + duration], [0, to], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: EASE,
	});
	return (
		<span style={{fontVariantNumeric: 'lining-nums tabular-nums'}}>
			{v.toFixed(decimals).replace('.', ',')}
			{suffix}
		</span>
	);
};
