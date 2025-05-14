import { Routes } from '@angular/router';
import { AppLayoutComponent } from '../components/layouts/app-layout/app-layout.component';
import { TradesuiteLayoutComponent } from '../components/layouts/tradesuite-layout/tradesuite-layout.component';
import { serviceRequestRoutes } from '../pages/service-request/service-request.routes';
import { authGuard } from '../services/authguard';
import { documentsRoutes } from '../pages/documents/documents.routes';
import { profile } from 'console';
import { profileManagementRoutes } from '../pages/profile-management/profile-management.routes';
import { articleRoutes } from '../pages/articles/articles.routes';

export const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
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
                path: 'bank-with-us',
                loadComponent: () => import('../pages/bank-with-us/bank-with-us.component').then(m => m.BankWithUsComponent)
            },
            {
                path: 'faq',
                loadComponent: () => import('../pages/faq/faq.component').then(m => m.FaqComponent)
            },
            {
                path: 'ob4b',
                loadComponent: () => import('../pages/online-banking-for-business/online-banking-for-business.component').then(m => m.OnlineBankingForBusinessComponent)
            },
        ]
    },
      // 🔁 Tradesuite layout routes
    {
        path: 'tradesuite',
        component: TradesuiteLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../pages/tradesuite/tradesuite.routes').then(m => m.tradesuiteRoutes)
            }
        ]
    },
    // Fallback
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
