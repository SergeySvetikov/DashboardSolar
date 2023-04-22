import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  ref!: DynamicDialogRef;
  menuItems!: MenuItem[];
  isAuthenticated: Observable<boolean> = this.authService.isAuth$;

  constructor(private _dialogService: DialogService, private authService: AuthService) {
    this.menuItems = [
      {
        label: 'Мои объявления',
        routerLink: '/my-products',
      },
      {
        label: 'Настройки',
        routerLink: '/my-options',
      },
      {
        label: 'Выйти',
        command: () => {
          this.authService.logout()
        }
      },
    ];
  }

  showAuthDialog() {
    this.ref = this._dialogService.open(LoginModalComponent, {
      dismissableMask: true,
      width: '100%',
      style: {
        'max-width': '400px',
      },
    });

  }
}
