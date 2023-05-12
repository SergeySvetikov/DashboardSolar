import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../../../core/interfaces/category.model';
import { CategoryService } from '../../../../core/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public categories: ICategory[] = [];

  constructor(private _categoryService: CategoryService) {}

  ngOnInit() {
    this._categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }
}
