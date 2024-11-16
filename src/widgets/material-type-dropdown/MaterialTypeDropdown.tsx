import css from './MaterialTypeDropdown.module.scss';

interface QuestionType {
    value: string;
    label: string;
}

const questionTypes: QuestionType[] = [
	{ value: 'chooseType', label: 'Выбери тип материала' },
	{ value: 'article', label: 'Статья' },
	{ value: 'video', label: 'Видео' },
];

export const MaterialTypeDropdown = () => {
	const a = '';
	return (
		<select className={css.questionType}>
			{questionTypes.map((type) => (
				<option key={type.value} value={type.value}>
					{type.label}
				</option>
			))}
		</select>
	);
};
