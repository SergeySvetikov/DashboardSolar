import { TokenService } from './token.service';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAuth } from "../interfaces/auth.model";
import { BehaviorSubject, Observable, switchMap, tap } from "rxjs";
import { IRegistration } from '../interfaces/registration.model';
@Injectable({
  providedIn: "root"
})
export class AuthService {
  baseUrl: string = '/api/Account';
  private _isAuthSubject = new BehaviorSubject<boolean>(false);
  public isAuth$: Observable<boolean> = this._isAuthSubject.asObservable().pipe();
  constructor(private _http: HttpClient, private tokenService: TokenService) { }
  private computePath(path: string) {
    return `${this.baseUrl}/${path}`
  }
  checkAuth() {
    if (this.tokenService.getToken()) {
      this._isAuthSubject.next(true);
    }
  }
  login(model: IAuth): Observable<string> {
    return this._http.post<string>(this.computePath('login'), model).pipe(
      tap(
        (token) => {
          this.tokenService.setToken(token)
          this._isAuthSubject.next(true)
        }
      )
    )
  }
  logout() {
    this.tokenService.destroyToken()
    this._isAuthSubject.next(false)
  }
  registration(model: IRegistration): Observable<string> {
    return this._http.post<string>(this.computePath('register'), model).pipe(
      switchMap(() => {
        return this.login({
          login: model.login,
          password: model.password
        })
      })
    )
  }
}
