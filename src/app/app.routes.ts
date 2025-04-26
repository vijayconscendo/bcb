import { Routes } from '@angular/router';
import { serviceRequestRoutes } from '../pages/service-request/service-request.routes';
import { authGuard } from '../services/authguard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../pages/landing-page/landing-page.component').then(m => m.LandingPageComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('../pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
        canActivate: [authGuard]
    },
    {
        path: 'our-solutions',
        loadComponent: () => import('../pages/unauth-our-solutions/unauth-our-solutions.component').then(m => m.UnauthOurSolutionsComponent)
    },
    // Replace the simple service-request with the child routes
    ...serviceRequestRoutes,
    // {
    //     path: 'service-request',
    //     loadComponent: () => import('../pages/service-request/service-request.component').then(m => m.ServiceRequestComponent)
    // },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
