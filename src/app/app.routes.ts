import { Routes } from '@angular/router';
import { serviceRequestRoutes } from '../pages/service-request/service-request.routes';
import { authGuard } from '../services/authguard';
import { documentsRoutes } from '../pages/documents/documents.routes';
import { profile } from 'console';
import { profileManagementRoutes } from '../pages/profile-management/profile-management.routes';
import { articleRoutes } from '../pages/articles/articles.routes';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../pages/landing-page/landing-page.component').then(m => m.LandingPageComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('../pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
        // canActivate: [authGuard]
    },
    {
        path: 'our-solutions',
        loadComponent: () => import('../pages/unauth-our-solutions/unauth-our-solutions.component').then(m => m.UnauthOurSolutionsComponent)
    },
    ...serviceRequestRoutes,
    ...documentsRoutes,
    {
        path: 'contact-us',
        loadComponent: () => import('../pages/contact-us/contact-us.component').then(m => m.ContactUsComponent),
    },
    {
        path: 'branch-locator',
        loadComponent: () => import('../pages/branch-locator/branch-locator.component').then(m => m.BranchLocatorComponent)
    },
    {
        path: 'connect-with-us',
        loadComponent: () => import('../pages/connect-with-us/connect-with-us.component').then(m => m.ConnectWithUsComponent)
    },
    {
        path: 'help-and-support',
        loadComponent: () => import('../pages/help-and-support/help-and-support.component').then(m => m.HelpAndSupportComponent)
    },
    ...profileManagementRoutes,
    ...articleRoutes,
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
