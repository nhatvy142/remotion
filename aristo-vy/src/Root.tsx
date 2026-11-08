import React from 'react';
import {Composition, Folder} from 'remotion';
import {SCENES, TITLE_B, TITLE_C} from './data';
import {PhanVy, totalFrames} from './PhanVy';
import {B4FloorStack} from './scenes/B4FloorStack';
import {B6UnitMix} from './scenes/B6UnitMix';
import {B8Payment} from './scenes/B8Payment';
import {B9Banks} from './scenes/B9Banks';
import {C2Partners} from './scenes/C2Partners';
import {TitleCard} from './scenes/TitleCard';
import {FPS, HEIGHT, WIDTH, sec} from './theme';

const dur = (id: string) => sec(SCENES.find((s) => s.id === id)!.sec);
const common = {fps: FPS, width: WIDTH, height: HEIGHT};

export const RemotionRoot: React.FC = () => (
	<>
		<Composition id="PhanVy" component={PhanVy} durationInFrames={totalFrames} {...common} />
		<Folder name="Canh">
			<Composition
				id="B-Title"
				component={TitleCard}
				durationInFrames={dur('B')}
				defaultProps={{...TITLE_B, variant: 'dark' as const}}
				{...common}
			/>
			<Composition id="B4-PhanTang" component={B4FloorStack} durationInFrames={dur('B4')} {...common} />
			<Composition id="B6-CoCauCan" component={B6UnitMix} durationInFrames={dur('B6')} {...common} />
			<Composition id="B8-ThanhToan" component={B8Payment} durationInFrames={dur('B8')} {...common} />
			<Composition id="B9-NganHang" component={B9Banks} durationInFrames={dur('B9')} {...common} />
			<Composition
				id="C1-Title"
				component={TitleCard}
				durationInFrames={dur('C1')}
				defaultProps={{...TITLE_C, variant: 'light' as const}}
				{...common}
			/>
			<Composition id="C2-DonVi" component={C2Partners} durationInFrames={dur('C2')} {...common} />
		</Folder>
	</>
);
