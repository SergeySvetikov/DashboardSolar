import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { MainPageRoutingModule } from './main-page.routing.module';
import { ProductsItemComponentModule } from '../../shared/components/products-item/products-item.component';
import { MainProductsComponent } from "./main-products/main-products.component";

@NgModule({
  declarations: [MainProductsComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    ButtonModule,
    ProductsItemComponentModule,
    SkeletonModule,
  ],
})
export class MainPageModule { }
