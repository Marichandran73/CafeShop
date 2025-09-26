import { Component } from '@angular/core';
import { AdminsidebarComponent } from '../adminsidebar/adminsidebar.component';
import { CommonheaderComponent } from './commonheader/commonheader.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admindashboard',
  imports: [AdminsidebarComponent,RouterOutlet,CommonheaderComponent],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {

}
