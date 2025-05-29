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
      title: 'It takes a phone call to avoid this scam',
      summary: 'When a supplier changes banking details, businesses need to know that scammers are on the hunt to make lucrative profits.',
      imageUrl: 'assets/images/articles/call-scam.jpg',
      category: 'Manage your business',
      date: '',
      readMoreLink: '/help-me-manage-my-business/guides/It-takes-a-phone-call-to-avoid-this-scam'
    },
    {
      id: 2,
      title: 'How to effectively deal with late payments',
      summary: 'Getting paid on time and in full is just as important as signing the deal or making the sale. But it’s a frustration that every business is likely to face at some stage. ',
      imageUrl: 'assets/images/articles/late-payments.jpg',
      category: 'Manage your business',
      date: '',
      readMoreLink: '/help-me-manage-my-business/guides/how-to-effectively-deal-with-late-payments'
    },
    {
      id: 3,
      title: 'Digital transformation will save you money',
      summary: 'How digital transformation can save costs and improve business efficiency and moving away from legacy systems.',
      imageUrl: 'assets/images/articles/digital-transformation.jpg',
      category: 'Manage your business',
      date: '',
      readMoreLink: '/help-me-manage-my-business/articles/digital-transformation-will-save-you-money'
    },
    {
      id: 4,
      title: '6 energy-saving tips for small businesses',
      summary: 'As a small business owner, you always have to be mindful of how to keep your operating costs low.',
      imageUrl: 'assets/images/articles/saving-tips.jpg',
      category: 'Manage your business',
      date: '',
      readMoreLink: '/help-me-manage-my-business/guides/6-energy-saving-tips-for-small-businesses'
    },
    // Additional articles for prewiew
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
