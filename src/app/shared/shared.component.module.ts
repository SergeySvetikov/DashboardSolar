import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AdvertsSearchComponent } from './components/adverts-search/adverts-search.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ProductsItemComponentModule } from './components/products-item/products-item.component';
import {MainPageModule} from "../modules/main-pages/main-page.module";
import {CategoriesComponent} from "./components/adverts-search/categories/categories.component";

@NgModule({
  declarations: [HeaderComponent, AdvertsSearchComponent, CategoriesComponent],
  exports: [HeaderComponent, AdvertsSearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ProgressSpinnerModule,
    MenuModule,
    ButtonModule,
    ProductsItemComponentModule,
    MainPageModule,
  ],
})
export class SharedComponentModule {}
