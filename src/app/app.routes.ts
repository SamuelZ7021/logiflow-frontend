import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard) },
      { path: 'shipments', loadComponent: () => import('./features/shipments/shipments').then(m => m.Shipments) },
      { path: 'customers', loadComponent: () => import('./features/customers/customers').then(m => m.Customers) },
      { path: 'reports', loadComponent: () => import('./features/reports/reports').then(m => m.Reports) },
      { path: 'settings', loadComponent: () => import('./features/settings/settings').then(m => m.Settings) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];