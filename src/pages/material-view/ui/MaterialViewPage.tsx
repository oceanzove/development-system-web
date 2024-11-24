import React from 'react';
import css from './MaterialViewPage.module.scss';
import { MaterialViewBlock } from './material-view-block';

export const MaterialViewPage = () => (
	<div className={css.wrapper}>
		<MaterialViewBlock />
	</div>
);
