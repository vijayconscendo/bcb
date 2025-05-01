import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-help-widgets',
  imports: [CommonModule],
  templateUrl: './help-widgets.component.html',
  styleUrl: './help-widgets.component.scss'
})
export class HelpWidgetsComponent {

  isContactWidget = false;
  isChatwidgetOpen = false;
  
  toggleContactWidget(): void {
    this.isContactWidget = !this.isContactWidget;
  }
  
  toggleIsChatwidget(): void {
    this.isChatwidgetOpen = !this.isChatwidgetOpen;
  }
  
}
