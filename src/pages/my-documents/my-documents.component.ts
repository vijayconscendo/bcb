import { CommonModule, Location  } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { HelpWidgetsComponent } from '../../components/help-widgets/help-widgets.component';

@Component({
  selector: 'app-documents',
  imports: [RouterModule, CommonModule, HelpWidgetsComponent],
  templateUrl: './my-documents.component.html',
  styleUrl: './my-documents.component.scss'
})
export class DocumentsComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private location = inject(Location);

  currentRoute: string = '';

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const urlSegments = this.router.url.split('/');
      this.currentRoute = urlSegments[urlSegments.length - 1];
    });
  }

  goBack() {
    this.location.back();
  }
}
