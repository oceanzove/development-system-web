import React from 'react';
import css from './competency.module.scss';

interface CompetencyProps {
    competency: string;
}

export const Competency = (props: CompetencyProps) => {
	const { competency } = props;
	return (
		<div className={css.wrapper}>
			{competency}
		</div>
	);
};
