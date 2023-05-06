import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyProductsComponent} from "./my-products/my-products.component";
import {MyProductsRoutingModule} from "./my-products-routing.module";
import { ButtonModule } from "primeng/button";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ProductsItemComponentModule } from "../../shared/components/products-item/products-item.component";

@NgModule({
  declarations: [MyProductsComponent],
  imports: [
    CommonModule,
    MyProductsRoutingModule,
    ButtonModule,
    BreadcrumbModule,
    ProductsItemComponentModule,
  ],
})
export class MyProductsModule {}
