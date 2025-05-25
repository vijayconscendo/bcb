import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthHeaderComponent } from '../auth-header/auth-header.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, AuthHeaderComponent, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  isLoading = false;
  private router = inject(Router);
  onSignIn() {
    this.isLoading = true;
    this.router.navigate(['/sign-in']);
    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      alert('Sign in functionality would be implemented here');
    }, 2000);
  }


}
