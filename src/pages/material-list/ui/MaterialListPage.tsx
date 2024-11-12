import React from 'react';
import css from './MaterialListPage.module.scss';
import { MaterialListBlock } from './material-list-block/MaterialListBlock';

export const MaterialListPage = () => (
	<div className={css.wrapper}>
		<MaterialListBlock />
	</div>
);
