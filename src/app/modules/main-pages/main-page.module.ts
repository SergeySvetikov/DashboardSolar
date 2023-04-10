import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { MainPageRoutingModule } from './main-page.routing.module';
import { MainProductsComponent } from './pages/main-products/main-products.component';
import { ProductsItemComponentModule } from '../../shared/components/products-item/products-item.component';

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
