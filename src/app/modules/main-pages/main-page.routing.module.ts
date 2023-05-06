import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainProductsComponent} from "./main-products/main-products.component";
import { ProductViewComponent } from "./product-view/product-view.component";
import { CategoryPageComponent } from "./category-page/category-page.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainProductsComponent,
  },
  {
    path: ':id',
    component: ProductViewComponent,
  },
  {
    path: 'category/:id',
    component: CategoryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
