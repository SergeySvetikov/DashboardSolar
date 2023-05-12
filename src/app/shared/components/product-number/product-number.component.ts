import { ChangeDetectionStrategy, Component,  } from "@angular/core";
import { NgIf } from "@angular/common";
import { DividerModule } from "primeng/divider";
import { IAuth } from "../../../core/interfaces/auth.model";
@Component({
  selector: 'app-product-number',
  templateUrl: './product-number.component.html',
  styleUrls: ['./product-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, DividerModule],
})
export class ProductNumberComponent {
  user!: IAuth
}

