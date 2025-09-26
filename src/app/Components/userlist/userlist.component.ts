import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { EmitService } from '../settings/emit.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit {
  userData: any[] = [];
  searchVar: any[]=[];


  constructor(private router: Router, private authService: AuthService, private emitDateService:EmitService) {}

  AddUser() {
    this.router.navigate([`/admindashboard/addUser`]);
  }

  ngOnInit(): void {
  this.authService.getUserList().subscribe({
    next: (res) => {
      if (res.users && Array.isArray(res.users)) {
        this.userData = res.users.filter((u: any) => u.role !== 'admin');
         this.emitDateService.dataResiver(this.userData);
      }
    },
    error: (error: HttpErrorResponse) => {
      console.error('User fetch error:', error);
      alert('Failed to load user list');
    }
  });
}

Searchbar(event:any){
  const value=event.target.value.toLowerCase(); 

  this.searchVar = this.userData.filter((item) => {
  return item.name.toLowerCase().includes(value);
});
}

DeleteFun(id: string) {
  this.authService.deleteUser(id).subscribe({
    next: (res) => {
      alert("Deleted Successfully");

      this.userData = this.userData.filter(user => user._id !== id);


      this.searchVar = this.searchVar.filter(user => user._id !== id);
    },
    error: (err) => {
      console.error("Delete error:", err);
      alert("Failed to delete user");
    }
  });
}

ViewFun(id:String){
  console.log("view",id);
this.router.navigate([`/admindashboard/userView/${id}`]);
}

EditFun(id:String){
  this.router.navigate([`/admindashboard/EditUser/${id}`]);
}
}
