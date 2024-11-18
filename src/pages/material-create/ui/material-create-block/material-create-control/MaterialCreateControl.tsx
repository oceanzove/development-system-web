import React from 'react';
import css from './MaterialCreateControl.module.scss';
import { MainButton } from '../../../../../widgets/button/button';
import { SecondaryButton } from '../../../../../widgets/cancel-button/secondary-button';

export const MaterialCreateControl = () => {
	const onSave = () => {
		alert('Сохранено');
	};

	const onClose = () => {
		alert('Закрыто');
	};

	return (
		<div className={css.wrapper}>
			<MainButton
				text="Сохранить"
				onClick={onSave}
			/>
			<SecondaryButton
				text="Закрыть"
				onClick={onClose}
			/>
		</div>
	);
};
