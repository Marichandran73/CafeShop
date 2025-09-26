import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-commonheader',
  imports: [],
  templateUrl: './commonheader.component.html',
  styleUrl: './commonheader.component.css'
})
export class CommonheaderComponent {
constructor(private router:Router ){}

  role=localStorage.getItem('role');
  logout(){
    localStorage.clear();
    // window.location.href="/login";
    this.router.navigate(['/login']);
  }
}
