import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private _http: HttpClient) { }

  getProducts():Observable<any>{
    return this._http.get<any>('/api/Advert')
  }
}
