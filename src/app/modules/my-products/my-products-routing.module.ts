import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyProductsComponent} from "./my-products/my-products.component";
import { ProductViewComponent } from "../main-pages/product-view/product-view.component";
import { AuthGuard } from "../../core/guards/auth.guard";

const routes: Routes = [
  {
    path: 'my-products',
    pathMatch: 'full',
    component: MyProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: ProductViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProductsRoutingModule { }
