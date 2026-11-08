import React from 'react';
import {AbsoluteFill, Series} from 'remotion';
import {ChapterTag} from './components/ChapterTag';
import {Placeholder} from './components/Placeholder';
import {SCENES, TITLE_B, TITLE_C} from './data';
import {B4FloorStack} from './scenes/B4FloorStack';
import {B6UnitMix} from './scenes/B6UnitMix';
import {B8Payment} from './scenes/B8Payment';
import {B9Banks} from './scenes/B9Banks';
import {C2Partners} from './scenes/C2Partners';
import {TitleCard} from './scenes/TitleCard';
import {sec} from './theme';

// Cảnh đã dựng bằng Remotion. Cảnh không có ở đây = khung chờ footage / render.
const BUILT: Record<string, React.FC> = {
	B: () => <TitleCard {...TITLE_B} />,
	B4: B4FloorStack,
	B6: B6UnitMix,
	B8: B8Payment,
	B9: B9Banks,
	C1: () => <TitleCard {...TITLE_C} variant="light" />,
	C2: C2Partners,
};

export const totalFrames = SCENES.reduce((s, sc) => s + sec(sc.sec), 0);

// Animatic toàn phần B → C2 (~2:25), đúng thời lượng từng cảnh để khớp voice tạm.
export const PhanVy: React.FC = () => (
	<AbsoluteFill style={{backgroundColor: 'black'}}>
		<Series>
			{SCENES.map((sc) => {
				const Built = BUILT[sc.id];
				return (
					<Series.Sequence key={sc.id} durationInFrames={sec(sc.sec)} name={`${sc.id} · ${sc.desc}`}>
						{Built ? (
							<Built />
						) : (
							<>
								<Placeholder id={sc.id} desc={sc.desc} seconds={sc.sec} />
								{sc.chapterTag !== null ? <ChapterTag active={sc.chapterTag} /> : null}
							</>
						)}
					</Series.Sequence>
				);
			})}
		</Series>
	</AbsoluteFill>
);
