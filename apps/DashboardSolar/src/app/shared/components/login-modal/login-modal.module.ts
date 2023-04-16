import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModalComponent } from './login-modal.component';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [LoginModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ChipsModule,
    ButtonModule,
  ],
})
export class LoginModalModule {}
