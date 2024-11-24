import React, { useId } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './MaterialListControl.module.scss';
import { MainButton } from '../../../../../widgets/button/button';
import { Label } from '../../../../../widgets/input-label/label';
import { Input } from '../../../../../widgets/input/input';

export const MaterialListControl = () => {
	const navigate = useNavigate();

	const searchId = useId();

	const onCreateMaterialClick = () => {
		navigate('/create-material');
	};
	return (
		<div className={css.wrapper}>
			<Label
				label="Поиск"
				color="black"
				id={searchId}
			>
				<Input id={searchId} />
			</Label>
			<MainButton
				text="Создать"
				onClick={onCreateMaterialClick}
			/>

		</div>
	);
};
