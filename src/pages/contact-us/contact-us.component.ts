import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, RouterLink],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactCards = [
    {
      image: 'assets/images/icons/icn_call-centre.png',
      title: 'Help & support',
      description: "We're here to help with your questions or queries",
      buttonText: 'give us a call'
    },
    {
      image: 'assets/images/icons/icn_location_outline.png',
      title: 'Find us near you',
      description: "Locate a branch that’s nearest to you",
      buttonText: 'Find a branch'
    },
    {
      image: 'assets/images/icons/icn_phone_tap_and_pay.png',
      title: 'Connect with us',
      description: "Speak to a banker for personalised assistance",
      buttonText: 'Speak to a banker'
    },
    {
      image: 'assets/images/icons/icn_mail.png',
      title: 'Stay informed',
      description: "Receive the latest news and updates on our new solutions ",
      buttonText: 'Subscribe to newsletters'
    }
  ];
}
