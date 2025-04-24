import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  imports: [],
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.scss'
})
export class StatusBadgeComponent {
  @Input() status: string = '';
  
  get statusClass(): string {
    switch (this.status) {
      case 'New':
        return 'new';
      case 'In progress':
        return 'in-progress';
      case 'Assigned':
        return 'assigned';
      case 'Resolved':
        return 'resolved';
      default:
        return '';
    }
  }
}
