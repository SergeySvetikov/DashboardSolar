import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {
  AdvertsSearchComponent,
  AdvertsSearchComponentModule,
} from './components/adverts-search/adverts-search.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ProductsItemComponentModule } from './components/products-item/products-item.component';
import { MainPageModule } from '../modules/main-pages/main-page.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ProgressSpinnerModule,
    MenuModule,
    ButtonModule,
    ProductsItemComponentModule,
    MainPageModule,
    AdvertsSearchComponentModule,
  ],
})
export class SharedComponentModule {}
