import { Component, inject } from '@angular/core';
import {FormControl,FormGroup,ReactiveFormsModule,Validators,} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../types/user';
import { RouterLink } from '@angular/router';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  authService = inject(AuthService);
  sessionStorage = inject(SessionStorageService)

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (user: User) => {
          this.sessionStorage.setUser(user);
        },
        
        error: (error) => {},
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
