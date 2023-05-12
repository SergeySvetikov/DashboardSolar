import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { IProduct } from '../../../core/interfaces/product.model';
import { MenuItem } from 'primeng/api';
import { ProductNumberComponent } from '../../../shared/components/product-number/product-number.component';
import { DialogService } from 'primeng/dynamicdialog';
import { AuthService } from '../../../core/services/auth.service';
import { CategoryService } from '../../../core/services/category.service';
import { switchMap, tap } from "rxjs";
import { IBreadCrumbs } from "../../../core/interfaces/breadCrumbs.model";
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  loadingStatus: boolean;
  products!: IProduct;
  public phoneModal() {
    this._dialogService.open(ProductNumberComponent, {
      width: '100%',
      style: {
        'max-width': '520px',
      },
      header: 'Сергей',
    });
  }
  redirectToMap(products: string): void {
    window.open(`https://yandex.com/maps/?text=${encodeURIComponent(products)}`, '_blank');
  }
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _http: ProductsService,
    private _dialogService: DialogService,
    private _authService: AuthService,
    private _categoryService: CategoryService,
  ) {
    this.loadingStatus = true;
  }
  public breadCrumbs: MenuItem[] = []
  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap((data) => {
        return this._http.getById(data['id']);
      }),
      tap((data) => {
        this.products = data;
        this.loadingStatus = false;
      }),
      switchMap((data) => {
        return this._categoryService.getBreadCrumbs(data.categoryId);
      })
    ).subscribe((value) => {
      this._createBreadCrumbs(value);
    });
  }
  private _createBreadCrumbs(value: IBreadCrumbs[]) {
    this.breadCrumbs = value.reduce(
      (acc: MenuItem[], item) => {
        acc.push(item)
        return acc;
      },
      [{ icon: 'pi pi-home', routerLink: '/' }]
    );
  }

}


