import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {COLORS} from '../theme';

// @BG_DARK: than chì vân travertine. @BG_LIGHT: ngà travertine.
// Vân đá giả lập bằng gradient; thay bằng ảnh nền thật qua prop `image` khi có.
export const Background: React.FC<{
	variant?: 'dark' | 'light';
	image?: string;
	children?: React.ReactNode;
}> = ({variant = 'dark', image, children}) => {
	const frame = useCurrentFrame();
	const drift = interpolate(frame, [0, 900], [0, 40]);
	const dark = variant === 'dark';
	const base = dark ? COLORS.charcoal : COLORS.travertine;
	const vein = dark ? 'rgba(239,232,220,0.035)' : 'rgba(42,38,34,0.05)';

	return (
		<AbsoluteFill style={{backgroundColor: base, overflow: 'hidden', fontVariantNumeric: 'lining-nums'}}>
			{image ? (
				<AbsoluteFill
					style={{
						backgroundImage: `url(${image})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
			) : (
				<AbsoluteFill
					style={{
						transform: `translateX(${-drift}px)`,
						width: '110%',
						backgroundImage: [
							`repeating-linear-gradient(103deg, transparent 0 38px, ${vein} 38px 40px, transparent 40px 97px)`,
							`repeating-linear-gradient(97deg, transparent 0 140px, ${vein} 140px 143px, transparent 143px 310px)`,
							dark
								? `radial-gradient(ellipse at 70% 30%, ${COLORS.charcoalSoft} 0%, ${COLORS.charcoal} 65%)`
								: `radial-gradient(ellipse at 30% 20%, #f3ece1 0%, ${COLORS.travertine} 70%)`,
						].join(','),
					}}
				/>
			)}
			{/* vignette nhẹ */}
			<AbsoluteFill
				style={{
					background: dark
						? 'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)'
						: 'radial-gradient(ellipse at center, transparent 60%, rgba(60,45,30,0.18) 100%)',
				}}
			/>
			{children}
		</AbsoluteFill>
	);
};
