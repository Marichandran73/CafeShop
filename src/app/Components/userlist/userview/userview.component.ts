import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../login/service/auth.service';

@Component({
  selector: 'app-userview',
  standalone: true,
  imports: [],
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  CurrentUser: any= {};

  constructor(private authService: AuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      const id= params.get('id');
      if(id){
        this.UserValue(id);
      }
    })
  }

  UserValue(id: String) {
    this.authService.getUser(id).subscribe({
      next: (res) => {
        this.CurrentUser = res.Userdetails;
      },
      error: (err) => {
        console.error("User fetch error:", err);
      }
    });
  }
}
