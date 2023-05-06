import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../../core/services/products.service";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap, tap } from "rxjs";
import { IProduct } from "../../../core/interfaces/product.model";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  constructor(
    private _productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}
  products: IProduct[] | null = null
  ngOnInit() {
    this.activatedRoute.params.subscribe((value) => {
      this._productService.getProducts().subscribe((products) => {
       const res = products.filter(item => {
         console.log(item)
          return item.categoryId === value['id']
        })
        console.log(value['id'])
      })
    })
  }
}
