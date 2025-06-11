import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactCard } from '../../../models/contact-card.model';

@Component({
  selector: 'app-contact-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent {
  @Input() contactCards: ContactCard[] = [];
  @Input() customClass: string = '';
  @Input() showGrid: boolean = true;
}
