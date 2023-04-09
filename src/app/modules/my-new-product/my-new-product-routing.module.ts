import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyNewProductComponent} from "./my-new-product/my-new-product.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MyNewProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyNewProductRoutingModule { }
