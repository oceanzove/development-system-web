import React from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './Router.module.scss';
import { MaterialListPage } from '../../pages/material-list';
import { MaterialCreatePage } from '../../pages/material-create';

const Router = () => (
	<div className={css.router}>
		<Routes>
			<Route path="/" element={<MaterialListPage />} />
			<Route path="/create-material" element={<MaterialCreatePage />} />
			{/* <Route path="/authororization" element={<AuthorizationPage />} /> */}
			{/* <Route path="/registration" element={<RegistrationPage />} /> */}
		</Routes>
	</div>
);
export default Router;
