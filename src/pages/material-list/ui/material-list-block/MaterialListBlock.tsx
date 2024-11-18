import React from 'react';
import css from './MaterialListBlock.module.scss';
import { MaterialList } from './list';
import { MaterialListControl } from './control';

export const MaterialListBlock = () => (
	<div className={css.wrapper}>
		<MaterialList />
		{/* <MaterialListControl /> */}
	</div>
);
