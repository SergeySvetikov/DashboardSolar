import { Component, NgModule, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';
import { CategoriesComponent } from './categories/categories.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OverlayModule } from 'primeng/overlay';

@Component({
  selector: 'app-adverts-search',
  templateUrl: './adverts-search.component.html',
  styleUrls: ['./adverts-search.component.scss'],
})
export class AdvertsSearchComponent implements OnInit {
  public isCategoriesOpened: boolean = false;
  public categories: any[] = [];

  constructor(private _categoryService: CategoryService) {}
  toggleCategories(): void {
    this.isCategoriesOpened = !this.isCategoriesOpened;
    if(this.isCategoriesOpened) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  public ngOnInit(): void {
    this._categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }
}

@NgModule({
  declarations: [AdvertsSearchComponent, CategoriesComponent],
  imports: [
    ButtonModule,
    InputTextModule,
    NgIf,
    RouterLink,
    NgForOf,
    NgClass,
    OverlayModule,
  ],
  exports: [AdvertsSearchComponent, CategoriesComponent],
  providers: [CategoryService],
})
export class AdvertsSearchComponentModule {}
