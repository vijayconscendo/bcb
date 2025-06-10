import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { CustomSearchComponent } from "../../generic-components/custom-search/custom-search.component";
import { BreadcrumbComponent } from '../../generic-components/breadcrumb/breadcrumb.component';


interface Article {
  id: number;
  title: string;
  summary?: string;
  date: string;
  category: string;
  imageUrl: string;
  readMoreLink: string;
}
@Component({
  selector: 'app-article-list',
  imports: [CommonModule, BreadcrumbComponent, NgSelectModule, FormsModule, PageIntroComponent, CustomSearchComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {
 currentPage = 1;
  articlesPerPage = 9;

  selectyear = [
    { id: 1, name: '2020' },
    { id: 2, name: '2021' },
    { id: 3, name: '2022' },
    { id: 4, name: '2023' },
    { id: 4, name: '2024' },
    { id: 4, name: '2025' }
  ];
  selectedYear: any;

  articles: Article[] = [
    {
      id: 1,
      title: '12 things to know before starting your own business',
      summary: '',
      imageUrl: 'assets/images/articles/own-business.jpg',
      category: 'START YOUR BUSINESS',
      date: '15 AUG 2023',
      readMoreLink: '/help-me-start-my-business/articles/12-things-to-know-before-starting-your-own-business'
    },
    {
      id: 2,
      title: '3 ways small businesses can protect themselves financially',
      summary: 'Starting a business requires a significant investment, and in order to protect your investment, it is crucial to have the right plans in place to protect yourself from any potential financial risks.',
      imageUrl: 'assets/images/articles/small-businesses.jpg',
      category: 'START YOUR BUSINESS',
      date: '07 JUN 2023',
      readMoreLink: '/help-me-start-my-business/articles/3-ways-small-businesses-can-protect-themselves-financially'
    },
    {
      id: 3,
      title: 'Get familiar with chargebacks and fraud claims',
      summary: 'When consumers become victims of fraud, they can turn to the chargeback process to recover their money, but for the merchant,',
      imageUrl: 'assets/images/articles/chargebacks.jpg',
      category: 'START YOUR BUSINESS',
      date: '22 Nov 2022',
      readMoreLink: '/help-me-start-my-business/articles/get-familiar-with-chargebacks-and-fraud-claims'
    },
    {
      id: 4,
      title: '3 Characteristics of successful start-up founders',
      summary: 'Focus on these traits for a successful start-up business positioned for growth, no matter how tough the markets become.',
      imageUrl: 'assets/images/articles/startup.jpg',
      category: 'START YOUR BUSINESS',
      date: '',
      readMoreLink: '/help-me-start-my-business/guides/3-characteristics-of-successful-start-up-founders'
    },
    // Additional articles can be added here
    {
      id: 5,
      title: 'Starting a side hustle',
      summary: 'Starting a side hustle is a smart financial move if you want to start your own business',
      imageUrl: 'assets/images/articles/article-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '15 OCT 2022',
      readMoreLink: '#'
    },
    {
      id: 6,
      title: 'The importance of patenting your products',
      summary: 'When you create a new product, design or process, you\'re likely to invest significant',
      imageUrl: 'assets/images/articles/article-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '30 AUG 2022',
      readMoreLink: '#'
    },
    {
      id: 7,
      title: 'The importance of patenting your products',
      summary: 'When you create a new product, design or process, you\'re likely to invest significant',
      imageUrl: 'assets/images/articles/article-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '30 AUG 2022',
      readMoreLink: '#'
    },
    {
      id: 8,
      title: 'The importance of patenting your products',
      summary: 'When you create a new product, design or process, you\'re likely to invest significant',
      imageUrl: 'assets/images/articles/article-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '30 AUG 2022',
      readMoreLink: '#'
    },
    {
      id: 9,
      title: 'The importance of patenting your products',
      summary: 'When you create a new product, design or process, you\'re likely to invest significant',
      imageUrl: 'assets/images/articles/article-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '30 AUG 2022',
      readMoreLink: '#'
    },
    {
      id: 10,
      title: 'The importance of patenting your products',
      summary: 'When you create a new product, design or process, you\'re likely to invest significant',
      imageUrl: 'assets/images/articles/article-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '30 AUG 2022',
      readMoreLink: '#'
    },
    {
      id: 11,
      title: 'The importance of patenting your products',
      summary: 'When you create a new product, design or process, you\'re likely to invest significant',
      imageUrl: 'assets/images/articles/article-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '30 AUG 2022',
      readMoreLink: '#'
    }
  ];

  get paginatedArticles(): Article[] {
    const start = (this.currentPage - 1) * this.articlesPerPage;
    return this.articles.slice(start, start + this.articlesPerPage);
  }

  setPage(page: number) {
    this.currentPage = page;
    // Optionally scroll to top when page changes
    window.scrollTo(0, 0);
  }

  totalPages(): number {
    return Math.ceil(this.articles.length / this.articlesPerPage);
  }
}
