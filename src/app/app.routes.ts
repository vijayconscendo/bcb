import { Routes } from '@angular/router';
import { AppLayoutComponent } from '../components/layouts/app-layout/app-layout.component';
import { TradesuiteLayoutComponent } from '../components/layouts/tradesuite-layout/tradesuite-layout.component';
import { serviceRequestRoutes } from '../pages/service-request/service-request.routes';
import { authGuard } from '../services/authguard';
import {  myDocumentsRoutes } from '../pages/my-documents/my-documents.routes';
import { profile } from 'console';
import { articleRoutes } from '../pages/articles/articles.routes';
import { OnlineBankingLayoutComponent } from '../components/layouts/online-banking-layout/online-banking-layout.component';
import { bankWithUsRoutes } from '../pages/bank-with-us/bank-with-us-routes';

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
               // canActivate: [authGuard]
            },
            {
                path: 'our-solutions',
                loadComponent: () => import('../pages/unauth-our-solutions/unauth-our-solutions.component').then(m => m.UnauthOurSolutionsComponent)
            },
            ...serviceRequestRoutes,
            ...myDocumentsRoutes,
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
            {
                path: 'my-profile',
                loadComponent: () => import('../pages/profile-management/profile-management.component').then(m => m.ProfileManagementComponent)
            },
            ...articleRoutes,
            ...bankWithUsRoutes,
            {
                path: 'faq',
                loadComponent: () => import('../pages/faq/faq.component').then(m => m.FaqComponent)
            },
            {
                path: 'ob4b',
                loadComponent: () => import('../pages/online-banking-for-business/online-banking-for-business.component').then(m => m.OnlineBankingForBusinessComponent)
            },
            {
                path: 'product-detail',
                loadComponent: () => import('../pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
            },
            {
                path: 'business-current-account-application',
                loadComponent: () => import('../pages/business-current-account-application/business-current-account-application.component').then(m => m.BusinessCurrentAccountApplicationComponent)
            },
            {
                path: 'my-mobiz-account',
                loadComponent: () => import('../pages/my-mobiz-account/my-mobiz-account.component').then(m => m.MyMobizAccountComponent)
            }
        ]
    },
      // 🔁 Tradesuite Layout Routes
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
    // Online Banking Layout Routes
    {
        path: 'online-banking',
        component: OnlineBankingLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../pages/online-banking/online-banking-routes').then(m => m.onlineBankingRoutes)
            }
        ]
    },
    {
        path : 'sign-in',
        loadComponent: () => import('../pages/auth/sign-in/sign-in.component').then(m => m.SignInComponent)
    },
    {
        path : 'sign-up',
        loadComponent: () => import('../pages/auth/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path : 'profile-selection',
        loadComponent: () => import('../pages/auth/profile-selection/profile-selection.component').then(m => m.ProfileSelectionComponent)
    },
    {
        path : 'terms-and-conditions',
        loadComponent: () => import('../pages/auth/terms-conditions/terms-conditions.component').then(m => m.TermsConditionsComponent)
    },
    // Fallback
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
