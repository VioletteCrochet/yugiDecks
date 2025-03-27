import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../types/user';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  authService = inject(AuthService)

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      
      
      const { email, password } = this.loginForm.value;
      console.log('Form submitted with:', { email, password });

      this.authService.login(email, password).subscribe({
        next: (user: User) => {
          console.log('Login successful', user);
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }


}
