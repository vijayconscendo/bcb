import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  whatisBcb = [
    {
      id: 'One',
      title: 'Why should I register for BCB Platform?',
      content: [
        "The BCB platform will help you manage your business and finances effortlessly. You'll have immediate access to a variety of solutions, resources and expert advice. You'll get personalised recommendations and advice on how to improve the success of your business.",
        "Easily register for the platform here using your existing Standard Bank online banking details. If you don't have an existing Standard Bank online profile, please create a new profile."
      ]
    },
    {
      id: 'Two',
      title: 'Is there a cost associated with registering on the BCB Platform?',
      content: [
        'No, the BCB platform is completely free of cost.'
      ]
    },
    {
      id: 'Three',
      title: 'Which country is the BCB Platform available in?',
      content: [
        'The platform is currently available in South Africa, Uganda and Angola. We are working on increasing our footprint.'
      ]
    }
  ];


  registerBcb = [
    {
      id: 'One',
      title: 'How do I register?',
      content: [
        `Register on the platform <a href="https://www.google.com">here</a>.`,
        `If you have an existing Standard Bank online profile (the details you use for Online Banking), please use those details to register. If you don’t have a Standard Bank online profile, please create a new profile.`
      ]
    },
    {
      id: 'Two',
      title: 'Do I need a Standard Bank online profile to register on the BCB platform?',
      content: [
        `No, you don't need a Standard Bank online profile, you can create a profile when you register.`
      ]
    },
    {
      id: 'Three',
      title: 'Do I need a mobile app to use the BCB Platform?',
      content: [
        'Register on the platform ',
        `No, the BCB Platform is an online web-based platform but it is fully responsive on your smartphone and desktop devices.`
      ]
    }
  ];

  secureBcb = [
    {
      id: 'One',
      title: 'What do you do with my data?',
      content: [
        `We believe in full transparency, your data will only be used in accordance with our Date Privacy Policy. View our Data Privacy Policy here.`
      ]
    },
    {
      id: 'Two',
      title: 'How do I ensure my profile on the BCB Platform is secure?',
      content: [
        `Ensure that your banking credentials are unique. Don’t become a victim of fraud, read more here, and always stay vigilant and informed.`
      ]
    }
  ];



}
