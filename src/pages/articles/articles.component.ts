import { Component } from '@angular/core';
import { ArticleOneComponent } from '../../components/article-view/article-one/article-one.component';
import { ArticleListComponent } from '../../components/article-view/article-list/article-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-articles',
  imports: [RouterModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

}
