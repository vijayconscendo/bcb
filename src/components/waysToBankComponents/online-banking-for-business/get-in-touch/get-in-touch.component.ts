import { Component } from '@angular/core';
import { ContactCardComponent } from '../../../generic-components/contact-card/contact-card.component';
import { ContactCard } from '../../../../models/contact-card.model';

@Component({
  selector: 'app-get-in-touch',
  imports: [ContactCardComponent],
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.scss'
})
export class GetInTouchComponent {
  contactCards: ContactCard[] = [
    {
      icon: 'assets/images/icons/icn_mail.png',
      iconAlt: 'mail icon',
      title: 'Email us at',
      description: 'BusinessBankingDigitalSupport@standardbank.co.za',
      linkUrl: 'BusinessBankingDigitalSupport@standardbank.co.za',
      linkType: 'email'
    },
    {
      icon: 'assets/images/icons/icn_call.png',
      iconAlt: 'call icon',
      title: 'Give us a call',
      description: 'South Africa:',
      linkUrl: '0860 109 075,+27 10 824 2934',
      linkType: 'tel',
      additionalInfo: 'Option 3'
    }
  ];
}
