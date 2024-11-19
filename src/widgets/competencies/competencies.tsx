import React from 'react';
import css from './competencies.module.scss';
import { Competency } from './item/competency';

interface CompetenciesProps {
    competencies: string[];
    placeholder?: string;
    width?: number;
    height?: number;
    id?: string;
}

export const Competencies = (props: CompetenciesProps) => {
	const {
		competencies,
		placeholder,
		width, height,
		id,
	} = props;
	return (
		<div className={css.competencies}>
			{competencies.map((competency) => (
				<Competency competency={competency} key={competency} />
			))}
		</div>
	);
};
