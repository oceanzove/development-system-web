import React from 'react';
import css from './MaterialListItem.module.scss';

interface MaterialListItemProps {
	title: string;
	author: string;
	competencies: string[];
	imageUrl: string;
}

export const MaterialListItem = ({
	title, author, competencies, imageUrl, 
}: MaterialListItemProps) => {
	const a = 'a';
	return (
		<div className={css.wrapper}>
			<div className={css.content}>
				<div className={css.title}>{title}</div>
				<div className={css.author}>{author}</div>
				{competencies && competencies.length > 0 && (
					<div className={css.competencies}>
						{competencies.map((competency) => (
							<div key={competency} className={css.competency}>{competency}</div>
						))}
					</div>
				)}
			</div>
			<div className={css.preview}>
				<img src={imageUrl} alt="" />
			</div>
		</div>
	);
};
