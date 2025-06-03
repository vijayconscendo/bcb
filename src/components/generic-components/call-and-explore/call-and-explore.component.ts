import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-call-and-explore',
  imports: [CommonModule],
  templateUrl: './call-and-explore.component.html',
  styleUrl: './call-and-explore.component.scss'
})
export class CallAndExploreComponent {
  @Input() heading!: string;
  @Input() subHeading!: string;
  
  @Input() callBackIcon!: string;
  @Input() callBackAlt!: string;
  @Input() callBackText!: string;
  @Input() callBackUrl!: string;
  
  @Input() exploreIcon!: string;
  @Input() exploreAlt!: string;
  @Input() exploreText!: string;
  @Input() exploreUrl!: string;
}
