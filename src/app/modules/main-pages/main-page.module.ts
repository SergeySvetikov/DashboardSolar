import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { MainPageRoutingModule } from './main-page.routing.module';
import { ProductsItemComponentModule } from '../../shared/components/products-item/products-item.component';
import { MainProductsComponent } from "./main-products/main-products.component";
import { ProductViewComponent } from "./product-view/product-view.component";
import { DropdownModule } from "primeng/dropdown";
import { ChipsModule } from "primeng/chips";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { FormsModule } from "@angular/forms";
import { ProductNumberComponent } from "../../shared/components/product-number/product-number.component";
import { CategoryPageComponent } from "./category-page/category-page.component";
import { ProgressSpinnerModule } from "primeng/progressspinner";

@NgModule({
  declarations: [
    MainProductsComponent,
    ProductViewComponent,
    CategoryPageComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    ButtonModule,
    ProductsItemComponentModule,
    SkeletonModule,
    DropdownModule,
    ChipsModule,
    BreadcrumbModule,
    FormsModule,
    ProductNumberComponent,
    ProgressSpinnerModule,
  ],
  exports: [ProductViewComponent],
})
export class MainPageModule {}
