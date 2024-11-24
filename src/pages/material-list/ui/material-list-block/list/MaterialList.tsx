import React from 'react';
import css from './MaterialList.module.scss';
import { MaterialListItem } from './item';

export const MaterialList = () => {
	const materials = [
		{
			id: 1,
			title: 'Материал 1',
			author: 'Автор 1',
			competencies: ['Аналитика', 'Разработка', 'Коммуникация'],
			imageUrl: 'https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg',
		},
		{
			id: 2,
			title: 'Материал 2',
			author: 'Автор 2',
			competencies: ['Креативность', 'Проектирование'],
			imageUrl: 'https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg',
		},
		{
			id: 3,
			title: 'Материал 3',
			author: 'Автор 3',
			competencies: ['Лидерство', 'Технические навыки'],
			imageUrl: 'https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg',
		},
		{
			id: 4,
			title: 'Материал 4',
			author: 'Автор 4',
			competencies: ['Организация', 'Планирование', 'Управление временем'],
			imageUrl: 'https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg',
		},
		{
			id: 5,
			title: 'Материал 5',
			author: 'Автор 5',
			competencies: ['Научные исследования', 'Инновации'],
			imageUrl: 'https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg',
		},
		{
			id: 6,
			title: 'Материал 6',
			author: 'Автор 6',
			competencies: ['Критическое мышление', 'Решение проблем'],
			imageUrl: 'https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg',
		},
		{
			id: 7,
			title: 'Материал 7',
			author: 'Автор 7',
			competencies: ['Работа в команде', 'Навыки переговоров'],
			imageUrl: 'https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg',
		},
		{
			id: 8,
			title: 'Материал 8',
			author: 'Автор 8',
			competencies: ['Мотивация', 'Саморазвитие'],
			imageUrl: 'https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg',
		},
		{
			id: 9,
			title: 'Материал 9',
			author: 'Автор 9',
			competencies: ['Гибкость', 'Адаптивность'],
			imageUrl: 'https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg',
		},
		{
			id: 10,
			title: 'Материал 10',
			author: 'Автор 10',
			competencies: ['Управление проектами', 'Ресурсное планирование'],
			imageUrl: 'https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg',
		},
		{
			id: 11,
			title: 'Материал 11',
			author: 'Автор 11',
			competencies: ['Техническое письмо', 'Документация'],
			imageUrl: 'https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg',
		},
		{
			id: 12,
			title: 'Материал 12',
			author: 'Автор 12',
			competencies: ['Исследование рынка', 'Прогнозирование'],
			imageUrl: 'https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg',
		},
		{
			id: 13,
			title: 'Материал 13',
			author: 'Автор 13',
			competencies: ['Программирование', 'Автоматизация', 'Тестирование'],
			imageUrl: 'https://i.pinimg.com/564x/34/f2/d5/34f2d554f45ac66757795e8bd0443abb.jpg',
		},
	];

	const items = materials.map(material => (
		<MaterialListItem
			title={material.title}
			author={material.author}
			competencies={material.competencies}
			imageUrl={material.imageUrl}
		/>
	));

	return (
		<div className={css.wrapper}>
			<div className={css.list}>
				{items}
			</div>
		</div>
	);
};
