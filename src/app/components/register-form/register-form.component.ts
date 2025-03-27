import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../types/user';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {


  authService = inject(AuthService)

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    pseudo: new FormControl('', [Validators.required]),
    cityCode:new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    phone:new FormControl('', [Validators.required]),
  })

  onSubmit() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (user: User) => {
        },
        error: (error) => {
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
