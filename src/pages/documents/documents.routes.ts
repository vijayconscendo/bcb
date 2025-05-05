import { Routes } from '@angular/router';
import { DocumentsComponent } from './documents.component';
import { AllDocumentsComponent } from '../../components/documents-view/all-documents/all-documents.component';
import { UnstampedStatementsComponent } from '../../components/documents-view/unstamped-statements/unstamped-statements.component';


export const documentsRoutes: Routes = [
  {
    path: 'documents',
    component: DocumentsComponent,
    children: [
      { path: '', component: AllDocumentsComponent },
      { path: 'unstamped-statements', component: UnstampedStatementsComponent },

    ]
  }
];