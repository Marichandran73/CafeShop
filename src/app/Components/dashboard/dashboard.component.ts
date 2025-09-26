import { Component } from '@angular/core';
import { NavbarComponent } from '../../Pages/navbar/navbar.component';
import { FooterComponent } from '../../Pages/footer/footer.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, NgxStarRatingModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

chocolateList = [
    { id: "1", name: "FNP Cream Drop", price: "500", starRate: 4.3, image: "https://www.fnp.com/images/pr/l/v20221228173135/chocolate-truffle-cream-cake-half-kg_1.jpg", description: "Chocolate is a sweet food made from cocoa beans and sugar." },
    { id: "2", name: "FNP Chocolate Bar", price: "100", starRate: 4.1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZi687GKJ60eU5-_2vamSFmzjsT8__tUja5g&s", description: "A rich and creamy chocolate bar, perfect for snacking and gifting." },
    { id: "3", name: "Dark Delight", price: "250", starRate: 4.6, image: "https://www.supergoldenbakes.com/wordpress/wp-content/uploads/2022/11/Air_Fryer_Chocolate_Cake.jpg", description: "Dark chocolate with a hint of bitterness, loaded with antioxidants." },
    { id: "4", name: "Nutty Crunch", price: "300", starRate: 4.5, image: "https://www.supergoldenbakes.com/wordpress/wp-content/uploads/2022/11/Air_Fryer_Chocolate_Cake.jpg", description: "Milk chocolate bar filled with crunchy roasted nuts." },
    { id: "5", name: "Silky Milk", price: "180", starRate: 4.2, image: "https://i.pinimg.com/736x/f9/4d/11/f94d11dd26aa5851249b7f20385b1690.jpg", description: "Smooth and creamy milk chocolate loved by kids and adults." },
    { id: "6", name: "Hazelnut Bliss", price: "350", starRate: 4.1, image: "https://images.squarespace-cdn.com/content/v1/611997a6b3864429020dea70/1635299482804-AFZCFJ2WZ0H0MRTS22LL/DSC_0645.JPG", description: "Delicious chocolate blended with crunchy hazelnuts." },
    { id: "7", name: "White Fantasy", price: "200", starRate: 5.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMIKt8cvzGHmtNs8e4kKQCQO0X1xhdNRhc5A&s", description: "Creamy white chocolate with a silky texture." },
    { id: "8", name: "Choco Truffle", price: "600", starRate: 4.8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMIKt8cvzGHmtNs8e4kKQCQO0X1xhdNRhc5A&s", description: "Premium truffle chocolates with a soft, rich filling." },
    { id: "9", name: "Fruit & Nut", price: "280", starRate: 4.3, image: "https://kreamz.in/wp-content/uploads/2024/02/chocolate-rectangle-cake.webp", description: "A perfect blend of dry fruits and chocolate." },
    { id: "10", name: "Mint Choco", price: "220", starRate: 4.1, image: "https://floristchennai.com/cdn/shop/products/Cherry-and-top-chocolate-cake.jpg?v=1681208012", description: "Refreshing mint flavor infused with creamy chocolate." },
    { id: "11", name: "Caramel Choco", price: "270", starRate: 4.6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVXC9OmveSj8zlPuRIQWAmnLU2Bd-cgWxsQ&s", description: "Chocolate filled with gooey caramel inside." },
    { id: "12", name: "Coffee Crunch", price: "320", starRate: 4.4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-z2LcPdIeJUlElJD1aOBmcphsoR5isveAYA&s", description: "Dark chocolate with roasted coffee bean crunch." },
    { id: "13", name: "Almond Supreme", price: "340", starRate: 4.5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-z2LcPdIeJUlElJD1aOBmcphsoR5isveAYA&s", description: "Chocolate mixed with roasted almonds for a nutty flavor." },
    { id: "14", name: "Raspberry Choco", price: "260", starRate: 4.2, image: "https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/84499_mouth-melting-chocolate-cake.jpeg", description: "Tangy raspberry flavor combined with rich dark chocolate." },
    { id: "15", name: "Choco Fudge", price: "400", starRate: 4.7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBezyRqQ5txnj_zZGwC-jz2eVnaAj6-hjqsw&s", description: "Soft fudge-style chocolate, melts in your mouth instantly." },
    { id: "16", name: "Golden Crunch", price: "310", starRate: 4.4, image: "https://cdn.shopify.com/s/files/1/0362/1653/files/NutellaFerreroRocherBirthdayCake_550x825.webp?v=1739114517", description: "Crunchy wafer coated with delicious chocolate." },
    { id: "17", name: "Choco Cookies", price: "280", starRate: 4.3, image: "https://www.whitakerschocolates.com/cdn/shop/articles/20250327165356-chocolate-20strawberry-20cake-20recipe-20uk.png?v=1754496351", description: "Cookie-filled chocolate that’s both crunchy and sweet." },
    { id: "18", name: "Peanut Choco Bar", price: "230", starRate: 4.1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4Jydy5jwRiuk2WLzTml8728zGwjtYU4mqA&s", description: "Chocolate bar with roasted peanut chunks." },
    { id: "19", name: "Luxury Gift Box", price: "1200", starRate: 4.9, image: "https://api.floraindia.com/upload/qtHfGxabCt1754123451804.jpeg", description: "Premium assorted chocolates in a luxury gift box." },
    { id: "20", name: "Festive Delight", price: "800", starRate: 4.6, image: "https://assets.winni.in/product/primary/2024/3/94564.jpeg?dpr=2&w=220", description: "Special edition chocolate pack for festivals and celebrations." }
  ];

  addToCart(){
    alert("Added to cart");
  }

}
