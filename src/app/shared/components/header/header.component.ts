import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  ref!: DynamicDialogRef;
  menuItems!: MenuItem[];
  isAuthenticated: boolean = false;

  constructor(private _dialogService: DialogService, private authService: AuthService) {}

  ngOnInit() {
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
    this.authService.isAuth$.subscribe((value) => {
      this.isAuthenticated = value
    })
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
