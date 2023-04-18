import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyNewProductComponent} from "./my-new-product/my-new-product.component";
import {MyNewProductRoutingModule} from "./my-new-product-routing.module";

@NgModule({
  declarations: [
    MyNewProductComponent
  ],
  imports: [
    CommonModule,
    MyNewProductRoutingModule
  ]
})
export class MyNewProductModule { }
