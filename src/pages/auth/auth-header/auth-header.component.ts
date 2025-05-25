import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-header',
  imports: [CommonModule],
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.scss'
})
export class AuthHeaderComponent {
  isGetTheApp:boolean = false;

  private router = inject(Router);

  isTermsPage = computed(() => this.router.url === '/terms-and-conditions');

  toggleGetTheApp(){
    this.isGetTheApp = !this.isGetTheApp;
  }
}
