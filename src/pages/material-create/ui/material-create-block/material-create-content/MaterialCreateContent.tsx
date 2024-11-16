import React from 'react';
import css from './MaterialCreateContent.module.scss';
import { MaterialTypeDropdown } from '../../../../../widgets/material-type-dropdown/MaterialTypeDropdown';

export const MaterialCreateContent = () => {
	const competencies = ['Программирование', 'Автоматизация', 'Тестирование'];

	return (
		<div className={css.wrapper}>
			<div>
				{competencies && competencies.length > 0 && (
					<div className={css.competencies}>
						{competencies.map((competency) => (
							<div key={competency} className={css.competency}>{competency}</div>
						))}
					</div>
				)}
			</div>
			<div className={css.title}>
				Название
			</div>
			<img
				className={css.img}
				src="https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg"
				alt=""
			/>
			<div className={css.description}>
				<div className={css.block}> Описание</div>
				<div className={css.block}> Содержание материала</div>
				<div className={css.block}>
					<MaterialTypeDropdown />
				</div>
			</div>
		</div>
	);
};
