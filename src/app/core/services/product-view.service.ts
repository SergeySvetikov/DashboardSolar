import { catchError, Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProduct } from "../interfaces/product.model";
import { INewProduct } from "../interfaces/new-product.model";

@Injectable({
  providedIn: 'root',
})
export class ProductViewService {

  constructor(private _http: HttpClient) {}
  baseUrl: string = '/api/Advert';
  getAdsListShort(): Observable<[IProduct]> {
    return this._http.get<[IProduct]>(`${this.baseUrl}`).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
  getAdsFull(adID: string): Observable<IProduct> {
    return this._http.get<IProduct>(`${this.baseUrl}` + adID).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  createAd(ad: INewProduct): Observable<IProduct> {
    return this._http.post<IProduct>(`${this.baseUrl}`, ad).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
