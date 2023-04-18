import { NgModule } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginModalModule } from './shared/components/login-modal/login-modal.module';
import { RouterModule } from '@angular/router';
import { MyOptionsModule } from './modules/my-options/my-options.module';
import { MyNewProductModule } from './modules/my-new-product/my-new-product.module';
import { MyProductsModule } from './modules/my-products/my-products.module';
import {AdvertsSearchComponentModule} from "./shared/components/adverts-search/adverts-search.component";
import {SharedComponentModule} from "./shared/shared.component.module";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModalModule,
    RouterModule,
    MyOptionsModule,
    MyNewProductModule,
    MyProductsModule,
    AdvertsSearchComponentModule,
    SharedComponentModule,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
