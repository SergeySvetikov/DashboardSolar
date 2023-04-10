import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
@Component({
  selector: 'app-main-products',
  templateUrl: './main-products.component.html',
  styleUrls: ['./main-products.component.scss'],
})
export class MainProductsComponent implements OnInit {
  isLoading: boolean = true;
  adverts: any[] | null = null;
  skeleton = new Array(20);
  constructor(private readonly _ProductsService: ProductsService) {}
  public ngOnInit(): void {
    this._ProductsService.getProducts().subscribe((response) => {
      setTimeout(() => {
        this.adverts = response;
        this.isLoading = false;
      }, 1000);
    });
  }
}
