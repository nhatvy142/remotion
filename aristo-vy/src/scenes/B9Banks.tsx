import React from 'react';
import {AbsoluteFill, Img, Sequence, staticFile} from 'remotion';
import {Background} from '../components/Background';
import {ChapterTag} from '../components/ChapterTag';
import {KeyText} from '../components/KeyText';
import {BANKS, CLOSING_WORDS, LOAN_TERMS} from '../data';
import {COLORS, SANS, SERIF, sec} from '../theme';

// B9: 3 nhịp — 4 logo ngân hàng (~7s) → điều kiện vay (~5s) → DỄ CHỌN · DỄ MUA · DỄ SỞ HỮU (~5s).
const Banks: React.FC = () => (
	<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
		<KeyText delay={4} exitAt={sec(7) - 15}>
			<div
				style={{
					fontFamily: SANS,
					fontWeight: 300,
					fontSize: 24,
					letterSpacing: '0.4em',
					color: COLORS.bronze,
					textAlign: 'center',
					marginBottom: 70,
				}}
			>
				ĐỒNG HÀNH TÀI CHÍNH
			</div>
		</KeyText>
		<div style={{display: 'flex', gap: 48}}>
			{BANKS.map((b, i) => (
				<KeyText key={b.name} delay={18 + i * 10} exitAt={sec(7) - 15}>
					<div
						style={{
							width: 330,
							height: 180,
							border: `1px solid ${COLORS.bronzeDeep}`,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							background: 'rgba(239,232,220,0.04)',
						}}
					>
						{b.logo ? (
							<Img src={staticFile(b.logo)} style={{maxWidth: 260, maxHeight: 120, objectFit: 'contain'}} />
						) : (
							<span style={{fontFamily: SANS, fontWeight: 300, fontSize: 22, color: COLORS.ivoryDim, letterSpacing: '0.2em'}}>
								{b.name}
							</span>
						)}
					</div>
				</KeyText>
			))}
		</div>
	</AbsoluteFill>
);

const Terms: React.FC = () => (
	<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 160}}>
		{LOAN_TERMS.map((t, i) => (
			<KeyText key={t.small} delay={6 + i * 16} exitAt={sec(5) - 15}>
				<div style={{textAlign: 'center'}}>
					<div style={{fontFamily: SERIF, fontWeight: 300, fontSize: 150, color: COLORS.ivory, letterSpacing: '0.06em'}}>
						{t.big}
					</div>
					<div style={{fontFamily: SANS, fontWeight: 300, fontSize: 26, color: COLORS.bronze, letterSpacing: '0.3em'}}>
						{t.small}
					</div>
				</div>
			</KeyText>
		))}
	</AbsoluteFill>
);

// Theo beat nhạc: chỉnh `beat` (frame) khi có nhạc thật.
const Closing: React.FC<{beat?: number}> = ({beat = 20}) => (
	<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 44}}>
		{CLOSING_WORDS.map((w, i) => (
			<React.Fragment key={w}>
				{i > 0 ? (
					<KeyText delay={8 + i * beat - 6}>
						<span style={{color: COLORS.bronze, fontSize: 60, fontFamily: SERIF}}>·</span>
					</KeyText>
				) : null}
				<KeyText delay={8 + i * beat}>
					<span style={{fontFamily: SERIF, fontWeight: 400, fontSize: 78, color: COLORS.ivory, letterSpacing: '0.1em'}}>
						{w}
					</span>
				</KeyText>
			</React.Fragment>
		))}
	</AbsoluteFill>
);

export const B9Banks: React.FC = () => (
	<Background>
		<ChapterTag active={4} />
		<Sequence durationInFrames={sec(7)} name="Logo ngân hàng">
			<Banks />
		</Sequence>
		<Sequence from={sec(7)} durationInFrames={sec(5)} name="Điều kiện vay">
			<Terms />
		</Sequence>
		<Sequence from={sec(12)} durationInFrames={sec(5)} name="Dễ chọn – Dễ mua – Dễ sở hữu">
			<Closing />
		</Sequence>
	</Background>
);
