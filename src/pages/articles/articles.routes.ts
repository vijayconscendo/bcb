import { Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { ArticleListComponent } from '../../components/article-view/article-list/article-list.component';
import { ArticleOneComponent } from '../../components/article-view/article-one/article-one.component';


export const articleRoutes: Routes = [
  {
    path: 'articles',
    component: ArticlesComponent,
    children: [
      { path: '', component: ArticleListComponent },
      { path: 'article-page', component: ArticleOneComponent },

    ]
  }
];