import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ICategory } from '../../../core/interfaces/category.model';
import { DockModule } from 'primeng/dock';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ChipsModule } from 'primeng/chips';
import { ProductsService } from '../../../core/services/products.service';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CategoryService } from '../../../core/services/category.service';
import { CommonModule, NgIf } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DestroyService } from '../../../core/services/destroy.service';
import { Router, RouterLink } from '@angular/router';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { INewProduct } from '../../../core/interfaces/new-product.model';
import { FileService } from '../../../core/services/file.service';
import { YaApiLoaderService } from 'angular8-yandex-maps';
import { takeUntil } from 'rxjs';

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
    ProgressSpinnerModule,
    RouterLink,
    FileUploadModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MyNewProductComponent implements OnInit {
  isLoading: boolean = false;
  error: string | null = null;
  categories: ProductsCategory[] = [];
  productForm!: FormGroup;
  imagesError: boolean = false;
  selectedImage!: File | null;

  constructor(
    private _productService: ProductsService,
    private _categoryService: CategoryService,
    private fb: FormBuilder,
    private _yaApiLoaderService: YaApiLoaderService,
    private _fileService: FileService,
    private destroy$: DestroyService,
    private _router: Router
  ) {}

  imageSelected(imagesToSelect: FileUpload) {
    this.selectedImage = imagesToSelect.files[0];
    console.log(imagesToSelect.files[0]);
  }

  imageRemove(imageToDelete: { file: File }) {
    this.selectedImage = null;
  }

  ngOnInit(): void {
    this._yaApiLoaderService.load().subscribe((ymaps) => {
      new ymaps.SuggestView('address');
    });
    this._categoryService.getCategories().subscribe((value) => {
      this.categories = value;
    });
    this.productForm = this.fb.group({
      category: [null, Validators.required],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50),],],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(350),],],
      address: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.maxLength(7)]],
    });
  }

  onSubmit() {
    this._fileService.uploadFile(this.selectedImage!).subscribe((imageUrl) => {
      const { name, description, category, price, address } =
        this.productForm.value;
      const newProduct: INewProduct = {
        name: name,
        description: description,
        categoryId: category.id,
        imageUrl: imageUrl,
        price: Number(price),
        address: address,
      };
      this._productService
        .createProduct(newProduct)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this._router.navigateByUrl('/');
        })
      this.isLoading = true;
    });
  }

  markCategory() {
    this.productForm.controls['category'].markAsTouched();
    this.productForm.controls['category'].updateValueAndValidity();
  }
}
