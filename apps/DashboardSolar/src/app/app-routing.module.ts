import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/main-pages/main-page.module').then(
        (m) => m.MainPageModule
      ),
  },
  {
    path: 'my-new-product',
    loadChildren: () =>
      import('./modules/my-new-product/my-new-product.module').then(
        (m) => m.MyNewProductModule
      ),
  },
  {
    path: 'my-products',
    loadChildren: () =>
      import('./modules/my-products/my-products.module').then(
        (m) => m.MyProductsModule
      ),
  },
  {
    path: 'my-options',
    loadChildren: () =>
      import('./modules/my-options/my-options.module').then(
        (m) => m.MyOptionsModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
