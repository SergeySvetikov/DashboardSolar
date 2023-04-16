import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOptionsComponent } from './my-options/my-options.component';
import { MyOptionsRoutingModule } from './my-options-routing.module';

@NgModule({
  declarations: [MyOptionsComponent],
  imports: [CommonModule, MyOptionsRoutingModule],
})
export class MyOptionsModule {}
