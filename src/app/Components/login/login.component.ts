import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLogin = false; // false = Login mode, true = Register mode

  constructor(private fb: FormBuilder, private api: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  // build form dynamically
  buildForm() {
    if (this.isLogin) {
      // Register mode
      this.loginForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        role: ['user']
      });
    } else{
      // Login mode
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
    }
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
    this.buildForm(); 
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      if (this.isLogin) {
        // Register
        this.api.registerUser(this.loginForm.value).subscribe({
          next: (res) => {
            alert('Registered Successfully');
            this.isLogin = false;
            this.buildForm();
            this.loginForm.reset();
          },
          error: (error: HttpErrorResponse) => {
            console.error("Register error:", error);
            alert('Registration failed');
          }
        });
      } else {
        // Login
        this.api.loginUser(this.loginForm.value).subscribe({
          next: (res) => {
            console.log("Login success:", res);
            localStorage.setItem("token", res.token);
            localStorage.setItem("role", res.role);
            alert('Login Successful');
            if (res.role === "admin") {
              this.router.navigate(['/admindashboard/userlist']);
            } else {
              this.router.navigate(['/dashboard']);
            }
            this.loginForm.reset();
          },
          error: (error: HttpErrorResponse) => {
            console.error("Login error:", error);
            alert('Login failed');
          }
        });
      }
    } else {
      alert('Please fill all fields correctly');
    }
  }
}
