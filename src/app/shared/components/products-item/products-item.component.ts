import {ChangeDetectionStrategy, Component, Input, NgModule} from '@angular/core';
import {RouterLink} from "@angular/router";
import { DatePipe, NgIf, TitleCasePipe } from "@angular/common";
import {SkeletonModule} from "primeng/skeleton";
import { IProduct } from "../../../core/interfaces/product.model";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProductsItemComponent {
  @Input() product!: IProduct;
}
@NgModule({
  declarations: [ProductsItemComponent],
  exports: [ProductsItemComponent],
  imports: [RouterLink, NgIf, SkeletonModule, DatePipe, TitleCasePipe],
})
export class ProductsItemComponentModule {

}
