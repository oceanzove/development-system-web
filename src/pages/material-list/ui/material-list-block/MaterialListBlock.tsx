import React from 'react';
import css from './MaterialListBlock.module.scss';
import { MaterialList } from './list';

export const MaterialListBlock = () => (
	<div className={css.wrapper}>
		<MaterialList />
	</div>
);
