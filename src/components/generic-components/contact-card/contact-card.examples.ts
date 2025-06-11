// Example usage patterns for ContactCardComponent

import { ContactCard } from "../../../models/contact-card.model";

// 1. Basic email contact
const emailContactCards: ContactCard[] = [
  {
    icon: 'assets/images/icons/icn_mail.png',
    iconAlt: 'email icon',
    title: 'Email Support',
    description: 'support@standardbank.co.za',
    linkUrl: 'support@standardbank.co.za',
    linkType: 'email'
  }
];

// 2. Phone contact with multiple numbers
const phoneContactCards: ContactCard[] = [
  {
    icon: 'assets/images/icons/icn_call.png',
    iconAlt: 'phone icon',
    title: 'Call Centre',
    description: 'South Africa:',
    linkUrl: '0860 123 456,+27 11 123 4567',
    linkType: 'tel',
    additionalInfo: 'Available 24/7'
  }
];

// 3. Navigation link
const linkContactCards: ContactCard[] = [
  {
    icon: 'assets/images/icons/icn_location_outline.png',
    iconAlt: 'location icon',
    title: 'Find a Branch',
    description: 'Locate your nearest Standard Bank branch',
    linkUrl: '/branch-locator',
    linkType: 'url',
    linkText: 'Find Now'
  }
];

// 4. Mixed contact cards
const mixedContactCards: ContactCard[] = [
  {
    icon: 'assets/images/icons/icn_mail.png',
    iconAlt: 'email icon',
    title: 'Business Banking Support',
    description: 'BusinessBankingDigitalSupport@standardbank.co.za',
    linkUrl: 'BusinessBankingDigitalSupport@standardbank.co.za',
    linkType: 'email'
  },
  {
    icon: 'assets/images/icons/icn_call.png',
    iconAlt: 'phone icon',
    title: 'Customer Service',
    description: 'South Africa:',
    linkUrl: '0860 109 075,+27 10 824 2934',
    linkType: 'tel',
    additionalInfo: 'Option 3'
  },
  {
    icon: 'assets/images/icons/icn_location_outline.png',
    iconAlt: 'location icon',
    title: 'Visit a Branch',
    description: 'Find your nearest branch for personalized service',
    linkUrl: '/branch-locator',
    linkType: 'url',
    linkText: 'Find Branch'
  }
];

// Usage in template:
// <app-contact-card [contactCards]="mixedContactCards"></app-contact-card>
// <app-contact-card [contactCards]="emailContactCards" [showGrid]="false"></app-contact-card>
// <app-contact-card [contactCards]="phoneContactCards" customClass="my-custom-class"></app-contact-card>
