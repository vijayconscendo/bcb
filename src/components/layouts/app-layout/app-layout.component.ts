import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavComponent } from '../../top-nav/top-nav.component';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-app-layout',
  imports: [RouterModule, TopNavComponent,HeaderComponent ,FooterComponent],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

}
