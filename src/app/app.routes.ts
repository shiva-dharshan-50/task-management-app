import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { HomePage } from './layouts/main-layout/home-page/home-page';
import { InfoPage } from './layouts/main-layout/info-page/info-page';
import { ServicePage } from './layouts/main-layout/service-page/service-page';
import { SummayPage } from './layouts/main-layout/summay-page/summay-page';
import { AuthLayout } from './layouts/auth-layout/auth-layout';

export const routes: Routes = [
  {
    component: AuthLayout,
    path: '',
  },
  {
    component: MainLayout,
    path: 'main',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        component: HomePage,
        path: 'home',
      },
      {
        component: InfoPage,
        path: 'info',
      },
      {
        component: ServicePage,
        path: 'service',
      },
      {
        component: SummayPage,
        path: 'summary',
      },
    ],
  },
];
