import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { ActivatedRoute,Router } from "@angular/router";
import { IProduct } from '../../../core/interfaces/product.model';
import { ICategory } from '../../../core/interfaces/category.model';
import { CategoryService } from '../../../core/services/category.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit{
  constructor(
    private _productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private _categoryService: CategoryService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}
  products: IProduct[] | null = null;
  skeleton: IProduct[] = Array(20)
  isLoading: boolean = true;
  categories: ICategory[] = [];
  filter = {
    minPrice: '',
    maxPrice: ''
  };
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((value) => {
      this._productService.getProducts().subscribe((products) => {
        let res = products
        if(value['categoryId']) {
          res = products.filter(item => {
            console.log(item.categoryId, value['categoryId'])
            return item.categoryId === value['categoryId']
          })
        }
        setTimeout(() => {
          this.products = res;
          this.isLoading = false;
        }, 200);
      })
    })
  }
  updateFilter() {
  }
  public myMethodChangingQueryParams() {
    const queryParams = {
      minPrice: this.filter.minPrice,
      maxPrice: this.filter.maxPrice
    };
    console.log(queryParams)
    this._router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: queryParams,
        queryParamsHandling: 'merge',
      });
  }
}
