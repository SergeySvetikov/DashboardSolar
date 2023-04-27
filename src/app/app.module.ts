import { NgModule } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginModalModule } from './shared/components/login-modal/login-modal.module';
import { RouterModule } from '@angular/router';
import { MyOptionsModule } from './modules/my-options/my-options.module';
import { MyProductsModule } from './modules/my-products/my-products.module';
import {AdvertsSearchComponentModule} from "./shared/components/adverts-search/adverts-search.component";
import {SharedComponentModule} from "./shared/shared.component.module";
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { MyNewProductModule } from "./modules/my-new-product/my-new-product.module";
import { ButtonModule } from "primeng/button";
import { ProgressSpinnerModule } from "primeng/progressspinner";
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
    ButtonModule,
    ProgressSpinnerModule,

  ],
  providers: [
    DialogService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
