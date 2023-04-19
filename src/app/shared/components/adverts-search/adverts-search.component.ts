import { Component, NgModule, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';
import { CategoriesComponent } from './categories/categories.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adverts-search',
  templateUrl: './adverts-search.component.html',
  styleUrls: ['./adverts-search.component.scss'],
})
export class AdvertsSearchComponent implements OnInit {
  public isCategoriesOpened: boolean = false;
  public categories: any[] = [];
  constructor(private _CategoryService: CategoryService) {}
  toggleCategories(): void {
    this.isCategoriesOpened = !this.isCategoriesOpened;
  }
  public ngOnInit(): void {
    this._CategoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }
}
@NgModule({
  declarations: [AdvertsSearchComponent, CategoriesComponent],
  imports: [ButtonModule, InputTextModule, NgIf, RouterLink],
  exports: [AdvertsSearchComponent],
  providers: [CategoryService],
})
export class AdvertsSearchComponentModule {}
