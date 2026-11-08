import React from 'react';
import {AbsoluteFill} from 'remotion';
import {COLORS, SANS, SERIF} from '../theme';
import {Background} from './Background';

// Khung chờ cho cảnh cần footage / render thật (B1, B2, B3, B5, B7…).
// Giữ đúng thời lượng để animatic khớp voice tạm.
export const Placeholder: React.FC<{id: string; desc: string; seconds: number}> = ({
	id,
	desc,
	seconds,
}) => (
	<Background>
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', gap: 24}}>
			<div
				style={{
					border: `1px dashed ${COLORS.bronzeDeep}`,
					padding: '48px 96px',
					textAlign: 'center',
				}}
			>
				<div style={{fontFamily: SERIF, fontSize: 120, color: COLORS.bronze, fontWeight: 300}}>{id}</div>
				<div style={{fontFamily: SANS, fontSize: 32, color: COLORS.ivory, fontWeight: 300, marginTop: 8}}>
					{desc}
				</div>
				<div
					style={{
						fontFamily: SANS,
						fontSize: 20,
						color: COLORS.ivoryDim,
						letterSpacing: '0.2em',
						marginTop: 28,
					}}
				>
					CHỜ FOOTAGE / RENDER · {seconds.toString().replace('.', ',')} GIÂY
				</div>
			</div>
		</AbsoluteFill>
	</Background>
);
