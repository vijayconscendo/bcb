import { Component } from '@angular/core';
import { CustomSearchComponent } from '../../../components/generic-components/custom-search/custom-search.component';

@Component({
  selector: 'app-bottom-sheet-search',
  imports: [CustomSearchComponent],
  templateUrl: './bottom-sheet-search.component.html',
  styleUrl: './bottom-sheet-search.component.scss'
})
export class BottomSheetSearchComponent {

}
