import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { passwordsMatchValidator } from 'src/app/utils/validators';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent {
  loginMode: boolean = true;

  form = new FormGroup({
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

  private _changeFormFields() {
    if (this.loginMode) {
      this.form.controls.email.removeValidators(Validators.required)
      this.form.controls.passwordConfirmation.removeValidators(Validators.required)
    } else {
      this.form.controls.email.addValidators(Validators.email)
      this.form.controls.passwordConfirmation.addValidators(Validators.required)
    }
    this.form.controls.email.updateValueAndValidity()
    this.form.controls.passwordConfirmation.updateValueAndValidity()
  }
  onSubmit() {
    if (this.loginMode) {
      const {login, password} = this.form.value
      this._AuthService.login({
        login: login ?? '',
        password: password ?? ''
      }).pipe(
        catchError((err) => {
          return throwError(() => err)
        }), tap(() => {
          this._dialogRef.close()
          this.router.navigate([''])
        })).subscribe()
    } else {
      const { login, email, password } = this.form.value
      this._AuthService.registration({
        login: login ?? '',
        email: email ?? '',
        password: password ?? ''
      }).pipe(
        catchError((err) => {
          return throwError(() => err)
        }), tap(() => {
          this._dialogRef.close()
          this.router.navigate([''])
        })).subscribe()
    }
  }
  switchMode() {
    this.loginMode = !this.loginMode;
    this._config.header = this.loginMode ? 'Авторизация' : 'Регистрация';
    this.switchMode()
  }
}
