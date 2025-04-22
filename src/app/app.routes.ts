import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../pages/landing-page/landing-page.component').then(m => m.LandingPageComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('../pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'our-solutions',
        loadComponent: () => import('../pages/unauth-our-solutions/unauth-our-solutions.component').then(m => m.UnauthOurSolutionsComponent)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
