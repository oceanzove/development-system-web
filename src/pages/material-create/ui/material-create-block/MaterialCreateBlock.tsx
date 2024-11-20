import React, { useId } from 'react';
import css from './MaterialCreateBlock.module.scss';
import { MaterialCreateControl } from './material-create-control';
import { Label } from '../../../../widgets/input-label/label';
import { Input } from '../../../../widgets/input/input';
import { DropdownMenu } from '../../../../widgets/dropdown-menu/dropdown-menu';
import { TextArea } from '../../../../widgets/textarea/textarea';
import { Competencies } from '../../../../widgets/competencies/competencies';

export const MaterialCreateBlock = () => {
	const materialTypes = [
		{ value: 'chooseType', label: 'Выберите тип материала' },
		{ value: 'article', label: 'Статья' },
		{ value: 'video', label: 'Видео' },
	];

	const competencies = ['Программирование', 'Автоматизация', 'Тестирование'];

	const titleId = useId();
	const typeId = useId();
	const descriptionId = useId();
	
	const a = 'a';
	return (
		<div className={css.wrapper}>
			<MaterialCreateControl />
			<Label label="Название" id={titleId}>
				<Input id={titleId} />
			</Label>
			<Label label="Тип материала" id={typeId}>
				<DropdownMenu options={materialTypes} id={typeId} />
			</Label>
			<Label label="Содержание материала" id={descriptionId}>
				<TextArea id={descriptionId} height={100} />
			</Label>
			<Label label="Компетенции">
				<Competencies initialCompetencies={competencies} />
			</Label>
			<img
				className={css.img}
				src="https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg"
				alt=""
			/>
		</div>
	);
};
