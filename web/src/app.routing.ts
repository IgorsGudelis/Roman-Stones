import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/index';

const APP_ROUTES:Routes = <Routes>[
	{path: '', component: HomeComponent},
	{path: '**', redirectTo: '/'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);