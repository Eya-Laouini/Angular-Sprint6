import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent  implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private foodService: FoodService, private router: Router) {}

  user: User = new User();
  confirmPassword!: string;

  ngOnInit(): void {}

  register() {
    const { username, email, password, confirmPassword } = this.form;
    if (password !== confirmPassword) {
      this.errorMessage = 'Password and Confirm Password do not match';
      this.isSignUpFailed = true;
      return;
    }

    
    let user = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log(user);
    this.foodService.saveUser(user).subscribe({
      next: (data) => {
        console.log(data);
        //this.router.navigate(['/verificationcode', { username: user.username }]);

        Swal.fire({
          icon: 'success',
          title: 'Please check your email!',
          timer: 5000
        }).then(() => {
          // After the SweetAlert is closed, navigate to the verification code page
          this.router.navigate(['/verificationcode']);
        });

      
      },
      error: (err) => {
        if (err.error && err.error.message) {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        } else {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/login']);
        }
      },
    });
  }
}
