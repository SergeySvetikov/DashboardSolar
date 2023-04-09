import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProducts():Observable<any>{
    return this._http.get<IProduct[]>('/endpoints/Advert')
  }
}
