import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyProductsComponent} from "./my-products/my-products.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MyProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProductsRoutingModule { }
