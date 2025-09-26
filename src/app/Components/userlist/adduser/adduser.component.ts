import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../login/service/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AddUserComponent implements OnInit {
  AddUser!: FormGroup;
 

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    
  ) {}

  ngOnInit(): void {
    this.buildForm();

    // this.route.paramMap.subscribe(params => {
    //   this.userId = params.get("id");   //get ID from route
    //   if (this.userId) {
    //     // Fetch user details & fill form
    //     this.authService.getUser(this.userId).subscribe({
    //       next: (res) => {
    //         this.AddUser.patchValue({
    //           name: res.Userdetails.name,
    //           email: res.Userdetails.email,
    //           role: res.Userdetails.role
    //           // password intentionally left empty
    //         });
            
    //       },
    //       error: (err) => {
    //         console.error("Error loading user details:", err);
    //       }
    //     });
    //   }
    // });
  }

  buildForm() {
    this.AddUser = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(8)]], 
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.AddUser.valid) {
        // Register flow
        this.authService.registerUser(this.AddUser.value).subscribe({
          next: (res) => {
            alert('User registered successfully!');
            this.AddUser.reset();
            this.router.navigate(['/admin/dashboard/userlist']);
          },
          error: (err) => {
            console.error('Register error:', err);
            alert('Failed to register user');
          }
        });
  
    } else {
      alert('Please fill all the fields correctly');
    }
  }
}
