import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss'],
})
export class MyProductsComponent implements OnInit {
  isLoading: boolean = true;
  adverts: any[] | null = null;
  skeleton = new Array(20);
  constructor(private readonly _productsService: ProductsService) {}
  public ngOnInit(): void {
    this._productsService.getProducts().subscribe((response) => {
      setTimeout(() => {
        this.adverts = response;
        this.isLoading = false;
      }, 1000);
    });
  }
}
