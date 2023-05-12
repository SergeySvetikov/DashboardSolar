import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent {
  loginMode: boolean = true;
  signUpPasswordInputType: string = 'password';
  showPassword: boolean = false;
  loginError!: string;

  loginForm = new FormGroup({
    login: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    passwordConfirmation: new FormControl(null, [Validators.minLength(6)]),
    email: new FormControl(null, [Validators.email])
  });
  constructor(
    private _config: DynamicDialogConfig,
    private _dialogRef: DynamicDialogRef,
    private _AuthService: AuthService,
    private router: Router,
  ) {
    _config.header = 'Авторизация';
  }
  onShowPassword() {
    this.signUpPasswordInputType = this.signUpPasswordInputType === 'password'
      ? 'text'
      : 'password';
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginMode) {
      const {login, password} = this.loginForm.value
      this._AuthService.login({
        login: login ?? '',
        password: password ?? ''
      }).pipe(
        catchError((err) => {
          this.handleError(err);
          return throwError(() => err)
        }), tap(() => {
          this._dialogRef.close()
          this.router.navigate([''])
        })).subscribe()
    } else {
      const { login, email, password } = this.loginForm.value
      this._AuthService.registration({
        login: login ?? '',
        email: email ?? '',
        password: password ?? ''
      }).pipe(
        catchError((err) => {
          this.handleError(err);
          return throwError(() => err)
        }), tap(() => {
          this._dialogRef.close()
          this.router.navigate([''])
        })).subscribe()
    }
  }
  handleError(err: any) {
    if (err.status === 500) {
      this.loginError = 'Неправильный логин или пароль';
    } else {
        this.loginError = 'Произошла ошибка при авторизации';
      }
      console.log('Произошла ошибка:', err);
  }

  switchMode() {
    this.loginMode = !this.loginMode;
    this._config.header = this.loginMode ? 'Авторизация' : 'Регистрация';
    this.showPassword = true;
    this.signUpPasswordInputType = 'password';
  }
}
