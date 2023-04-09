import { NgModule } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AppComponent } from './app.component';
import { SharedComponentModule } from './shared/shared.component.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginModalModule } from './shared/components/login-modal/login-modal.module';
import { RouterModule } from '@angular/router';
import { MyOptionsModule } from './modules/my-options/my-options.module';
import { MyNewProductModule } from './modules/my-new-product/my-new-product.module';
import { MyProductsModule } from './modules/my-products/my-products.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedComponentModule,
    BrowserModule,
    HttpClientModule,
    LoginModalModule,
    RouterModule,
    MyOptionsModule,
    MyNewProductModule,
    MyProductsModule,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
