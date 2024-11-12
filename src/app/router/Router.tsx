import React from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './Router.module.scss';
import { MaterialListPage } from '../../pages/material-list';

const Router = () => (
	<div className={css.router}>
		<Routes>
			<Route path="/" element={<MaterialListPage />} />
			{/* <Route path="/authorization" element={<AuthorizationPage />} /> */}
			{/* <Route path="/registration" element={<RegistrationPage />} /> */}
		</Routes>
		{/* eslint-disable-next-line indent */}
	</div>
);
export default Router;
