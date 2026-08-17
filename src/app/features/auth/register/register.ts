import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-register',
  imports: [SharedModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private readonly fb = inject(FormBuilder);

  hidePassword = true;
  hideConfirmPassword = true;
  isLoading = false;

  registerForm = this.fb.nonNullable.group({
    firstName: ['', [Validators.required, Validators.maxLength(50)]],
    lastName: ['', [Validators.required, Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
  });

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const formValue = this.registerForm.getRawValue();

    if (formValue.password !== formValue.confirmPassword) {
      this.registerForm.controls.confirmPassword.setErrors({
        passwordMismatch: true,
      });

      return;
    }

    console.log('Registration data:', formValue);
  }
}
