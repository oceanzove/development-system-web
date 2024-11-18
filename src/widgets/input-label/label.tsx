import React from 'react';
import css from './label.module.scss';

interface InputLabelProps {
    label?: string;
    children?: React.ReactNode;
    id?: string;
}

export const Label = (props: InputLabelProps) => {
	const {
		label,
		children,
		id,
	} = props;

	return (
		<div className={css.wrapper}>
			<label className={css.label} htmlFor={id}>
				{label}
			</label>
			{children}
		</div>
	);
};
