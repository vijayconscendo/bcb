import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { PageIntroComponent } from '../../generic-components/page-intro/page-intro.component';
import { CustomSearchComponent } from "../../generic-components/custom-search/custom-search.component";


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
  imports: [CommonModule, RouterLink, NgSelectModule, FormsModule, PageIntroComponent, CustomSearchComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {
 currentPage = 1;
  articlesPerPage = 9;

  searchTerm=""


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
      title: 'How our tailored banking solutions can benefit your accounting practice',
      summary: '',
      imageUrl: 'assets/images/articles/tailored-banking.jpg',
      category: 'Grow your business',
      date: '',
      readMoreLink: '/help-me-grow-my-business/articles/how-our-tailored-banking-solutions-can-benefit-your-accounting-practice'
    },
    {
      id: 2,
      title: '3 critical ways to create a solid support structure for your franchisees for business success',
      summary: 'Getting your franchisees to sign on was the easy part; giving them adequate support to make a success of the business is the real challenge.',
      imageUrl: 'assets/images/articles/critical-ways.jpg',
      category: 'Grow your business',
      date: '07 JUL 2023',
      readMoreLink: '/help-me-grow-my-business/guides/support-structure-for-your-franchisees'
    },
    {
      id: 3,
      title: 'How to find the right marketing channel for your target market',
      summary: 'One of the most vital steps in a successful marketing campaign is choosing a marketing channel.',
      imageUrl: 'assets/images/articles/right-marketing.jpg',
      category: 'Grow your business',
      date: '',
      readMoreLink: '/help-me-grow-my-business/guides/how-to-find-the-right-marketing-channel-for-your-target-market'
    },
    {
      id: 4,
      title: 'How to influence consumer behaviour with behavioural economics',
      summary: 'When consumers become victims of fraud, they can turn to the chargeback process to recover',
      imageUrl: 'assets/images/articles/consumer-behaviour.jpg',
      category: 'Grow your business',
      date: '',
      readMoreLink: '/help-me-grow-my-business/guides/how-to-influence-consumer-behaviour-with-behavioural-economics'
    },
    // Duplicate articles added below for view perpose
    {
      id: 5,
      title: 'Starting a side hustle',
      summary: 'Starting a side hustle is a smart financial move if you want to start your own business',
      imageUrl: 'assets/images/banners/artical-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '15 OCT 2022',
      readMoreLink: '#'
    },
    {
      id: 6,
      title: 'The importance of patenting your products',
      summary: 'When you create a new product, design or process, you\'re likely to invest significant',
      imageUrl: 'assets/images/banners/artical-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '30 AUG 2022',
      readMoreLink: '#'
    },
    {
      id: 7,
      title: 'The importance of patenting your products',
      summary: 'When you create a new product, design or process, you\'re likely to invest significant',
      imageUrl: 'assets/images/banners/artical-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '30 AUG 2022',
      readMoreLink: '#'
    },
    {
      id: 8,
      title: 'The importance of patenting your products',
      summary: 'When you create a new product, design or process, you\'re likely to invest significant',
      imageUrl: 'assets/images/banners/artical-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '30 AUG 2022',
      readMoreLink: '#'
    },
    {
      id: 9,
      title: 'The importance of patenting your products',
      summary: 'When you create a new product, design or process, you\'re likely to invest significant',
      imageUrl: 'assets/images/banners/artical-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '30 AUG 2022',
      readMoreLink: '#'
    },
    {
      id: 10,
      title: 'The importance of patenting your products',
      summary: 'When you create a new product, design or process, you\'re likely to invest significant',
      imageUrl: 'assets/images/banners/artical-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '30 AUG 2022',
      readMoreLink: '#'
    },
    {
      id: 11,
      title: 'The importance of patenting your products',
      summary: 'When you create a new product, design or process, you\'re likely to invest significant',
      imageUrl: 'assets/images/banners/artical-banner-one.jpg',
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
