import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'app-product-number',
  templateUrl: './product-number.component.html',
  styleUrls: ['./product-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ProductNumberComponent {

}
