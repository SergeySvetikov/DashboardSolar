import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyOptionsComponent} from "./my-options/my-options.component";
import {MyOptionsRoutingModule} from "./my-options-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { ChipsModule } from "primeng/chips";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [MyOptionsComponent],
  imports: [
    CommonModule,
    MyOptionsRoutingModule,
    ReactiveFormsModule,
    ChipsModule,
    ButtonModule,
  ],
})
export class MyOptionsModule {}
