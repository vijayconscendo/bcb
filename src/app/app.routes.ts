import { Routes } from '@angular/router';
import { AppLayoutComponent } from '../components/layouts/app-layout/app-layout.component';
import { TradesuiteLayoutComponent } from '../components/layouts/tradesuite-layout/tradesuite-layout.component';
import { serviceRequestRoutes } from '../pages/service-request/service-request.routes';
import { authGuard } from '../services/authguard';
import {  myDocumentsRoutes } from '../pages/my-documents/my-documents.routes';
import { profile } from 'console';
import { OnlineBankingLayoutComponent } from '../components/layouts/online-banking-layout/online-banking-layout.component';
import { bankWithUsRoutes } from '../pages/bank-with-us/bank-with-us-routes';
import { helpMeStartMyBusinessRoutes } from '../pages/help-me-start-my-business/help-me-start-my-business.routes';
import { helpMeManageBusinessRoutes } from '../pages/help-me-manage-my-business/help-me-manage-my-business.routes';
import { helpMeGrowMyBusinessRoutes } from '../pages/help-me-grow-my-business/help-me-grow-my-business.routes';
import { myMobizRoutes } from '../pages/my-mobiz/my-mobiz.routes';
import { borrowForYourNeeds } from '../pages/borrow-for-your-needs/borrow-for-your-needs.routes';
import { savingAndInvestRoutes } from '../pages/saving-and-investment-accounts/saving-and-invest-account.routes';
import { InsureWhatMattersRoutes } from '../pages/insure-what-matters/insure-what-matters.routes';
import { businessSolutionsRoutes } from '../pages/business-solutions/business-solutions.routes';

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
            ...bankWithUsRoutes,
            ...borrowForYourNeeds,
            {
                path: 'faq',
                loadComponent: () => import('../pages/faq/faq.component').then(m => m.FaqComponent)
            },
            {
                path: 'product-detail',
                loadComponent: () => import('../pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
            },
            {
                path: 'ways-to-bank',
                loadChildren: () => import('../pages/ways-to-bank/ways-to-bank.routes').then(m => m.waysToBankRoutes),
            },
            ...helpMeStartMyBusinessRoutes,
            ...helpMeManageBusinessRoutes,
            ...helpMeGrowMyBusinessRoutes,
            ...myMobizRoutes,
            ...savingAndInvestRoutes,
            ...InsureWhatMattersRoutes,
            ...businessSolutionsRoutes,
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
