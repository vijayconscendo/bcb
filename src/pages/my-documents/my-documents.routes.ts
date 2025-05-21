import { Routes } from '@angular/router';
import { DocumentsComponent } from './my-documents.component';
import { AllDocumentsComponent } from '../../components/documentComponents/all-documents/all-documents.component';
import { UnstampedStatementsComponent } from '../../components/documentComponents/unstamped-statements/unstamped-statements.component';



export const myDocumentsRoutes: Routes = [
  {
    path: 'my-documents',
    component: DocumentsComponent,
    children: [
      { path: '', component: AllDocumentsComponent },
      { path: 'unstamped-statements', component: UnstampedStatementsComponent },

    ]
  }
];