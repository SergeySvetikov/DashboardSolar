import {ChangeDetectionStrategy, Component, Input, NgModule} from '@angular/core';
import {RouterLink} from "@angular/router";
import { DatePipe, NgIf, TitleCasePipe } from "@angular/common";
import {SkeletonModule} from "primeng/skeleton";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProductsItemComponent {
  @Input() product: any | undefined;

}
@NgModule({
  declarations: [ProductsItemComponent],
  exports: [ProductsItemComponent],
  imports: [RouterLink, NgIf, SkeletonModule, DatePipe, TitleCasePipe],
})
export class ProductsItemComponentModule {

}
