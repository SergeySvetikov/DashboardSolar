import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNewProductComponent } from "./my-new-product/my-new-product.component";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { RouterModule } from "@angular/router";
import { MyNewProductRoutingModule } from "./my-new-product-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { ToastModule } from "primeng/toast";

@NgModule({
  declarations: [],
  imports: [
    MyNewProductRoutingModule,
    CommonModule,
    CascadeSelectModule,
    RouterModule.forChild([
      { path: 'my-new-products', component: MyNewProductComponent },
    ]),
    ReactiveFormsModule,
    ToastModule,
  ],
  exports: [],
})
export class MyNewProductModule {}
