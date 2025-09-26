import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

   currentYear = new Date().getFullYear();
  address = 'No. 12, Coffee Street, Chennai';
  phone = '+91 98765 43210';
  email = 'hello@cafename.com';
  hours = [
    { day: 'Mon - Fri', time: '8:00 AM - 9:00 PM' },
    { day: 'Sat - Sun', time: '9:00 AM - 10:00 PM' },
  ];

  // Add this function
  subscribeNewsletter(event: Event) {
    event.preventDefault(); // prevent page reload
    alert('Subscribed!');   // now this works
  }
}
