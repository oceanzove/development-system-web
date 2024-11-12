import React from 'react';
import css from './MaterialList.module.scss';
import { MaterialListItem } from './item';

export const MaterialList = () => {
	const props = [{ id: 1, item: 'name1' }, { id: 2, item: 'name2' }, { id: 3, item: 'name3' }];
	const items = props.map(item => (
		<MaterialListItem key={item.id} />
	));
	return (
		<div className={css.wrapper}>
			MaterialList
			{ items }
		</div>
	);
};
