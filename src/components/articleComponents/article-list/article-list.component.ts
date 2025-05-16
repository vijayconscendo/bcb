import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

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
  imports: [CommonModule, RouterLink, NgSelectModule, FormsModule],
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
      imageUrl: 'assets/images/banners/artical-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '15 AUG 2023',
      readMoreLink: '/articles/article-page'
    },
    {
      id: 2,
      title: '4 ways to make sure you\'re selling the right products',
      summary: 'Beginner guide to selling the right products',
      imageUrl: 'assets/images/banners/artical-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '07 JUL 2023',
      readMoreLink: '#'
    },
    {
      id: 3,
      title: '3 ways small businesses can protect themselves financially',
      summary: 'Financial risk management tips',
      imageUrl: 'assets/images/banners/artical-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '07 JUN 2023',
      readMoreLink: '#'
    },
    {
      id: 4,
      title: 'Get familiar with chargebacks and fraud claims',
      summary: 'When consumers become victims of fraud, they can turn to the chargeback process to recover',
      imageUrl: 'assets/images/banners/artical-banner-one.jpg',
      category: 'START YOUR BUSINESS',
      date: '22 NOV 2022',
      readMoreLink: '#'
    },
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
