import React from 'react';
import css from './MaterialCreateBlock.module.scss';

export const MaterialCreateBlock = () => {
	const competencies = ['Программирование', 'Автоматизация', 'Тестирование'];

	return (
		<div className={css.wrapper}>
			{/* eslint-disable-next-line react/button-has-type */}
			<button> Сохранить</button>
			{/* eslint-disable-next-line react/button-has-type */}
			<button> Закрыть</button>
			{competencies && competencies.length > 0 && (
				<div className={css.competencies}>
					{competencies.map((competency) => (
						<div key={competency} className={css.competency}>{competency}</div>
					))}
				</div>
			)}
			<div>
				<img />
			</div>
			<div>
				Заголовок
			</div>
			<div>
				Краткое описание
			</div>
			<div>
				Содержание материала
			</div>
			<div>
				Тип материала
			</div>
		</div>
	);
};
