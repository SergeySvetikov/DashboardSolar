import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProductsComponent } from './my-products/my-products.component';
import { MyProductsRoutingModule } from './my-products-routing.module';

@NgModule({
  declarations: [MyProductsComponent],
  imports: [CommonModule, MyProductsRoutingModule],
})
export class MyProductsModule {}
