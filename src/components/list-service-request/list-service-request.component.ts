import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListServiceRequestTableComponent } from '../list-service-request-table/list-service-request-table.component';

@Component({
  selector: 'app-list-service-request',
  imports: [RouterModule, ListServiceRequestTableComponent],
  templateUrl: './list-service-request.component.html',
  styleUrl: './list-service-request.component.scss'
})
export class ListServiceRequestComponent {

}
