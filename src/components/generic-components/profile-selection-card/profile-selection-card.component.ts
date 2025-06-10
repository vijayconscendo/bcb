import { Component } from '@angular/core';
import { CustomSearchComponent } from '../custom-search/custom-search.component';

@Component({
  selector: 'app-profile-selection-card',
  imports: [CustomSearchComponent],
  templateUrl: './profile-selection-card.component.html',
  styleUrl: './profile-selection-card.component.scss'
})
export class ProfileSelectionCardComponent {

}
