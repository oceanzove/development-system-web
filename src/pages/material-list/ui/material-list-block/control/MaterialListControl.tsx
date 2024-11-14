import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './MaterialListControl.module.scss';

export const MaterialListControl = () => {
	const navigate = useNavigate();

	const onCreateMaterialClick = () => {
		navigate('/create-material');
	};
	return (
		<div className={css.wrapper}>
			<div>
				Search
				<input />
			</div>
			<div>
				Filter
				<input />
			</div>
			<div>
				{/* eslint-disable-next-line react/button-has-type */}
				<button onClick={onCreateMaterialClick}> Создать</button>
			</div>
		</div>
	);
};
