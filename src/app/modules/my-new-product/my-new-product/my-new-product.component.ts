import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ICategory } from '../../../core/interfaces/category.model';
import { DockModule } from 'primeng/dock';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ChipsModule } from 'primeng/chips';
import { ProductsService } from '../../../core/services/products.service';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CategoryService } from '../../../core/services/category.service';
import { CommonModule, NgIf } from '@angular/common';
import { AddImagesComponent } from '../add-images/add-images.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { catchError, takeUntil, tap, throwError } from 'rxjs';
import { IProduct } from '../../../core/interfaces/product.model';
import { DestroyService } from '../../../core/services/destroy.service';
import { RouterLink } from '@angular/router';

type ProductsCategory = ICategory & { subCategories?: ICategory[] };

@Component({
  selector: 'app-my-new-product',
  templateUrl: './my-new-product.component.html',
  styleUrls: ['./my-new-product.component.scss'],
  providers: [DestroyService],
  imports: [
    CommonModule,
    DockModule,
    ReactiveFormsModule,
    ChipsModule,
    CascadeSelectModule,
    NgIf,
    AddImagesComponent,
    FileUploadModule,
    ProgressSpinnerModule,
    RouterLink,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MyNewProductComponent implements OnInit {
  isLoading: boolean = false;
  newProductId!: string;
  error!: string;
  categories: ProductsCategory[] = [];

  productForm = this.fb.group({
    category: ['', Validators.required],
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(300),
      ],
    ],
    address: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(60)],
    ],
    imageUrl: [
      'http://90.156.209.122:5000/File/37edece3-0a01-48cd-93f2-06ce989fc3f5',
      Validators.required,
    ],
    price: ['', [Validators.required, Validators.maxLength(7)]],
  });

  constructor(
    private _productService: ProductsService,
    private _categoryService: CategoryService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private destroy$: DestroyService
  ) {}

  markCategoryAsTouched() {
    this.productForm.controls.category.markAsTouched();
    this.productForm.controls.category.updateValueAndValidity();
  }

  ngOnInit(): void {
    this._categoryService.getCategories().subscribe((value) => {
      this.categories = value;
    });
  }

  onUpload(fileId: string) {
    // @ts-ignore
    this.productForm.get('fileId')?.setValue(fileId);
  }

  createProduct() {
    if (this.productForm.valid) {
      const product = this.productForm.value as unknown as IProduct;
      const categoryId = this.productForm.controls.category.value;
      if (categoryId) {
        product.categoryId = categoryId;
      }
      this.isLoading = true;
      this.error = '';
      this._productService
        .createProduct(product)
        .pipe(
          catchError((err) => {
            this.error = 'Не удалось создать объявление, попробуйте снова';
            this.isLoading = false;
            this.cdr.markForCheck();
            return throwError(() => err);
          }),
          tap((product) => {
            this.newProductId = product.id;
            this.isLoading = false;
            this.cdr.markForCheck();
          }),
          takeUntil(this.destroy$)
        )
        .subscribe();
    }
  }
}
