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
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputTextareaModule } from "primeng/inputtextarea";
import { MainPageModule } from "./modules/main-pages/main-page.module";
import { ProductsItemComponentModule } from "./shared/components/products-item/products-item.component";
import { AngularYandexMapsModule, YaConfig } from "angular8-yandex-maps";
const mapConfig: YaConfig = {
  lang: 'ru_RU',
};
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
    ChipsModule,
    DropdownModule,
    InputTextareaModule,
    MainPageModule,
    ProductsItemComponentModule,
    AngularYandexMapsModule.forRoot(mapConfig),
  ],
  providers: [
    DialogService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
