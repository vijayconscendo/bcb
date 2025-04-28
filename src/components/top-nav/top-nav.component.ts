import { Component } from '@angular/core';
import { CountrySwitchComponent } from '../country-switch/country-switch.component';

@Component({
  selector: 'app-top-nav',
  imports: [CountrySwitchComponent],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {

}
