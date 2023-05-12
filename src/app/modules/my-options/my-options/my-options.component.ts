import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-options',
  templateUrl: './my-options.component.html',
  styleUrls: ['./my-options.component.scss'],
})
export class MyOptionsComponent implements OnInit {

  userName?: string;
  userMail?: string;
  optionsForm!: FormGroup;
  userAddress?: string;
  changePasswordForm: any;
  currentPassword?: string;
  newPassword?: string;

  ngOnInit() {
    this.optionsForm = new FormGroup({
      mail: new FormControl('', [Validators.minLength(5), Validators.email]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      address: new FormControl('', [Validators.minLength(8)]),
    });
    this.changePasswordForm = new FormGroup({
      currentPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      newPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  changeUserData() {
  }

  changeUserPassword() {
  }
}
