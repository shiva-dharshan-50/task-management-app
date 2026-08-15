import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../shared/service/user.service';
import { NotificationService } from '../../shared/service/notification.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-auth-layout',
  imports: [SharedModule],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout implements OnInit {
  loginForm!: FormGroup;
  isLoginMode: boolean = true;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      userName: [''],
      password: [''],
    });
  }

  register() {
    this.userService
      .register(this.loginForm.value)
      .pipe(
        finalize(() => {
          this.loading = false;
        }),
      )
      .subscribe({
        next: (res: any) => {
          this.notificationService.success(res.message);
        },

        error: (err) => {
          this.notificationService.error(err?.error?.message || 'Something went wrong');
        },
      });
  }
  login() {
    this.loading = true;
    this.userService
      .login(this.loginForm.value)
      .pipe(
        finalize(() => {
          this.loading = false;
        }),
      )
      .subscribe({
        next: (res: any) => {
          this.notificationService.success(res.message);

          // We'll navigate to home later
        },

        error: (err) => {
          this.notificationService.error(err?.error?.message || 'Something went wrong');
          this.clearForm();
        },
      });
  }
  toggleLogin() {
    this.isLoginMode = !this.isLoginMode;
    this.clearForm();
  }
  clearForm() {
    this.loginForm.reset();
  }
}
