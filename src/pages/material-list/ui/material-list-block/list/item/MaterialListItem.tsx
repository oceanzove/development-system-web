import css from './MaterialListItem.module.scss';

export const MaterialListItem = () => {
	const a = 'a';
	return (
		<div className={css.wrapper}>
			<div className={css.content}>
				<div className={css.title}> Курс по созданию материалов</div>
				<div className={css.author}> Создатель</div>
				<div className={css.list}>
					<div className={css.item}> Хаос</div>
					<div className={css.item}> Разум</div>
				</div>
			</div>
			<div className={css.preview}>
				<img src="https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg" alt="alt" />
			</div>
		</div>
	);
};
