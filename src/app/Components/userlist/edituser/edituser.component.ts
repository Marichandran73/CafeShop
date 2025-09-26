import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../login/service/auth.service';



@Component({
  selector: 'app-edit-user',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.css'
})
export class EditUserComponent {

   userId: string | null = null;  
   UpdateUser!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,private route: ActivatedRoute){}

     ngOnInit(): void {

      this.UpdateUser = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['', Validators.required],
  });

    this.route.paramMap.subscribe(params => {
      this.userId = params.get("id");
      console.log("params user id",this.userId);
      if (this.userId) {
        // Fetch user details & fill form
        this.authService.getUser(this.userId).subscribe({
          next: (res) => {
            this.UpdateUser.patchValue({
              name: res.Userdetails.name,
              email: res.Userdetails.email,
              role: res.Userdetails.role
              // password intentionally left empty
            });
  
          },
          error: (err) => {
            console.error("Error loading user details:", err);
          }
        });
      }
    });
  }
  
  
    onSubmit() {
      if (this.userId) {
        // Update flow
        this.authService.updateUser(this.userId, this.UpdateUser.value).subscribe({
          next: (res) => {
            alert('User updated successfully!');
            this.router.navigate(['/admindashboard/userlist']);
          },
          error: (err) => {
            console.error('Update error:', err);
            alert('Failed to update user');
          }
        });
      }  else {
      alert('Please fill all the fields correctly');
    }
  }
}




