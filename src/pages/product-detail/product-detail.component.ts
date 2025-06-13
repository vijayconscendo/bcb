import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ToolbarOneComponent } from '../../components/generic-components/toolbar-one/toolbar-one.component';
import { BottomSheetActionsComponent } from './bottom-sheet-actions/bottom-sheet-actions.component';
import { BottomSheetFiltersComponent } from './bottom-sheet-filters/bottom-sheet-filters.component';
import { DocumentsComponent } from './documents/documents.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { BreadcrumbComponent } from '../../components/generic-components/breadcrumb/breadcrumb.component';
import { BottomSheetSearchComponent } from './bottom-sheet-search/bottom-sheet-search.component';


@Component({
  selector: 'app-product-detail',
  imports: [
    CommonModule,
    BreadcrumbComponent,
    ToolbarOneComponent,
    BottomSheetActionsComponent,
    BottomSheetFiltersComponent,
    TransactionHistoryComponent,
    DocumentsComponent,
    BottomSheetSearchComponent
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
