import React from 'react';
import css from './MaterialCreateBlock.module.scss';
import { MaterialCreateControl } from './material-create-control';
import { MaterialCreateContent } from './material-create-content';

export const MaterialCreateBlock = () => {
	const a = 'a';
	return (
		<div className={css.wrapper}>
			<MaterialCreateControl />
			<MaterialCreateContent />
		</div>
	);
};
