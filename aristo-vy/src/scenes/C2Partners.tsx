import React from 'react';
import {AbsoluteFill, Img, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Background} from '../components/Background';
import {BronzeLine} from '../components/BronzeLine';
import {KeyText} from '../components/KeyText';
import {PARTNERS} from '../data';
import {COLORS, EASE, SANS, SERIF, sec} from '../theme';

// C2: mỗi đơn vị ~4,5s — hình chi tiết The Aristo (trái) + tên + lĩnh vực (phải).
// Dùng hình Aristo thay vì portfolio đơn vị. 8s cuối: không gian Staycation (Nhi / Yến).
export const PARTNER_SEC = 4.5;
export const STAYCATION_SEC = 8;

const PartnerCard: React.FC<{index: number; name: string; field: string; image: string | null}> = ({
	index,
	name,
	field,
	image,
}) => {
	const frame = useCurrentFrame();
	const zoom = interpolate(frame, [0, sec(PARTNER_SEC)], [1.06, 1], {easing: EASE});
	const fade = interpolate(frame, [0, 12, sec(PARTNER_SEC) - 12, sec(PARTNER_SEC)], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<AbsoluteFill style={{opacity: fade}}>
			<div
				style={{
					position: 'absolute',
					left: 0,
					top: 0,
					width: 1150,
					height: 1080,
					overflow: 'hidden',
					background: COLORS.charcoalSoft,
				}}
			>
				{image ? (
					<Img
						src={staticFile(image)}
						style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${zoom})`}}
					/>
				) : (
					<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
						<span style={{fontFamily: SANS, fontSize: 24, color: COLORS.ivoryDim, letterSpacing: '0.2em'}}>
							RENDER CHI TIẾT · {field.toUpperCase()}
						</span>
					</AbsoluteFill>
				)}
			</div>
			<svg width="100%" height="100%" viewBox="0 0 1920 1080" style={{position: 'absolute'}}>
				<BronzeLine d="M1150 0 L1150 1080" duration={30} width={1} />
				<BronzeLine d="M1260 540 L1460 540" delay={10} duration={24} width={1} />
			</svg>
			<div style={{position: 'absolute', left: 1260, top: 380}}>
				<KeyText delay={6}>
					<div style={{fontFamily: SANS, fontWeight: 200, fontSize: 24, color: COLORS.bronze, letterSpacing: '0.3em'}}>
						{String(index + 1).padStart(2, '0')} / {String(PARTNERS.length).padStart(2, '0')}
					</div>
				</KeyText>
				<KeyText delay={12}>
					{/* thay bằng logo vector khi có */}
					<div style={{fontFamily: SERIF, fontWeight: 400, fontSize: 92, color: COLORS.ivory, letterSpacing: '0.1em', marginTop: 10}}>
						{name}
					</div>
				</KeyText>
				<div style={{marginTop: 48}}>
					<KeyText delay={22}>
						<div style={{fontFamily: SANS, fontWeight: 300, fontSize: 30, color: COLORS.ivoryDim, letterSpacing: '0.08em'}}>
							{field}
						</div>
					</KeyText>
				</div>
			</div>
		</AbsoluteFill>
	);
};

export const C2Partners: React.FC = () => (
	<Background>
		{PARTNERS.map((p, i) => (
			<Sequence key={p.name} from={sec(i * PARTNER_SEC)} durationInFrames={sec(PARTNER_SEC)} name={p.name}>
				<PartnerCard index={i} {...p} />
			</Sequence>
		))}
		<Sequence from={sec(PARTNERS.length * PARTNER_SEC)} name="Staycation (Nhi / Yến)">
			<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
				<KeyText delay={6}>
					<div style={{fontFamily: SERIF, fontStyle: 'italic', fontSize: 72, color: COLORS.ivory, letterSpacing: '0.12em'}}>
						STAYCATION
					</div>
				</KeyText>
				<KeyText delay={18}>
					<div style={{fontFamily: SANS, fontSize: 22, color: COLORS.ivoryDim, letterSpacing: '0.2em', marginTop: 20}}>
						CHỜ FOOTAGE KHÔNG GIAN STAYCATION · NHI / YẾN
					</div>
				</KeyText>
			</AbsoluteFill>
		</Sequence>
	</Background>
);
