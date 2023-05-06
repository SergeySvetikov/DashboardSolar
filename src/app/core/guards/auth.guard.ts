import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { map } from "rxjs";
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){
    return this._authService.isAuth$.pipe(
      map(isAuth => {
        if (!isAuth) {
          this.router.navigate(['/']);
          return false;
        }
        return true;
      })
    );
  }
}
