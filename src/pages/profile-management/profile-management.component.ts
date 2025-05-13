import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BusinessDetailsComponent } from '../../components/profile-management-view/business-details/business-details.component';

interface Tab {
  id: string;
  title: string;
  component?: any;
  content?: string;
}

@Component({
  selector: 'app-profile-management',
  imports: [RouterModule, CommonModule],
  templateUrl: './profile-management.component.html',
  styleUrl: './profile-management.component.scss'
})
export class ProfileManagementComponent {
  activeTab = 'tab1';

  tabs: Tab[] = [
    { id: 'tab1', title: 'Tab 1', component: BusinessDetailsComponent },
    { id: 'tab2', title: 'Tab 2', content: 'Content of Tab 2' },
    { id: 'tab3', title: 'Tab 3', content: 'Content of Tab 3' }
  ];
}
