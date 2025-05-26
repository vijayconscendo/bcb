import { Component } from '@angular/core';
import { AssignedComponent } from "./assigned/assigned.component";
import { ResolvedComponent } from './resolved/resolved.component';
import { TrackToolbarComponent } from './track-toolbar/track-toolbar.component';


@Component({
  selector: 'app-track-request',
  imports: [AssignedComponent, ResolvedComponent, TrackToolbarComponent],
  templateUrl: './track-request.component.html',
  styleUrl: './track-request.component.scss'
})
export class TrackRequestComponent {

}
