import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { CalendarModule } from 'primeng/calendar';
import { ToolbarOneComponent } from '../../components/generic-components/toolbar-one/toolbar-one.component';
import { BottomSheetActionsComponent } from './bottom-sheet-actions/bottom-sheet-actions.component';
import { BottomSheetFiltersComponent } from './bottom-sheet-filters/bottom-sheet-filters.component';
import { DocumentsComponent } from './documents/documents.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';


@Component({
  selector: 'app-product-detail',
  imports: [
    CommonModule,
    ToolbarOneComponent,
    BottomSheetActionsComponent,
    BottomSheetFiltersComponent,
    TransactionHistoryComponent,
    DocumentsComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  activeTab: 'transaction' | 'documents' = 'transaction';

  setActiveTab(tab: 'transaction' | 'documents') {
    this.activeTab = tab;
  }
}
