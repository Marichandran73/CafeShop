import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false; 
  isDropdownOpen = false; 
  localStore = false;

  data:any[]=[];

  


  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  switchLogin() {
    if (!this.localStore) {
      this.router.navigate(['/login']);
    } else {
      if (typeof window !== 'undefined') {
        localStorage.removeItem("token");
      }
      this.localStore = false;
      this.router.navigate(['/dashboard']); 
    }
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.localStore = !!localStorage.getItem('token');
    }
  }



}
