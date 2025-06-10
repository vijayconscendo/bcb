import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { NewBusinessComponent } from './new-business/new-business.component';
import { ManageBusinessComponent } from './manage-business/manage-business.component';
import { GrowBusinessComponent } from './grow-business/grow-business.component';

@Component({
  selector: 'app-tab-slider-one',
  imports: [CommonModule, NgSelectComponent, FormsModule],
  templateUrl: './tab-slider-one.component.html',
  styleUrl: './tab-slider-one.component.scss',
})
export class TabSliderOneComponent {
  tabs: Array<{
    id: string;
    label: string;
    active: boolean;
    content?: string;
    component?: Type<any>;
  }> = [
    {
      id: 'taba',
      label: 'Starting a new business',
      active: true,
      component: NewBusinessComponent,
    },
    {
      id: 'tabb',
      label: 'Managing your business',
      active: false,
      component: ManageBusinessComponent,
    },
    {
      id: 'tabc',
      label: 'Growing your business',
      active: false,
      component: GrowBusinessComponent,
    },
  ];

  get activeTabId(): string {
    return this.tabs.find((tab) => tab.active)?.id || '';
  }

  set activeTabId(tabId: string) {
    this.activateTab(tabId);
  }

  activateTab(tabId: string) {
    this.tabs.forEach((tab) => (tab.active = tab.id === tabId));
  }
}
