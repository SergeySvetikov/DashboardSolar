import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNewProductComponent } from './my-new-product/my-new-product.component';
import { AuthGuard } from "../../core/guards/auth.guard";

const routes: Routes = [
  {
    path: 'my-new-product',
    pathMatch: 'full',
    component: MyNewProductComponent,
    canActivate: [AuthGuard]

  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyNewProductRoutingModule {}
