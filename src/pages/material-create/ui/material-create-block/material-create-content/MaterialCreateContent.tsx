import React, { useId } from 'react';
import css from './MaterialCreateContent.module.scss';
import { DropdownMenu } from '../../../../../widgets/dropdown-menu/dropdown-menu';
import { Input } from '../../../../../widgets/input/input';
import { Label } from '../../../../../widgets/input-label/label';

export const MaterialCreateContent = () => {
	const competencies = ['Программирование', 'Автоматизация', 'Тестирование'];

	const materialTypes = [
		{ value: 'chooseType', label: 'Выберите тип материала' },
		{ value: 'article', label: 'Статья' },
		{ value: 'video', label: 'Видео' },
	];

	const titleId = useId();
	const typeId = useId();

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
			<div>
				<Label label="Название" id={titleId}>
					<Input id={titleId} />
				</Label>
				<Label label="Тип материала" id={typeId}>
					<DropdownMenu options={materialTypes} id={typeId} />
				</Label>
			</div>
			<img
				className={css.img}
				src="https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg"
				alt=""
			/>
			<div className={css.description}>
				<div className={css.block}> Описание</div>
				<div className={css.block}> Содержание материала</div>
			</div>
		</div>
	);
};
