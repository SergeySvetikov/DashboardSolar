import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNewProductComponent } from "./my-new-product.component";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [MyNewProductComponent],
  imports: [
    CommonModule,
    CascadeSelectModule,
    RouterModule.forChild([
      { path: 'my-new-products', component: MyNewProductComponent},
    ]),
  ],
  exports: []
})
export class MyNewProductModule {}
