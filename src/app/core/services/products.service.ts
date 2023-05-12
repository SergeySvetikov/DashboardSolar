import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from "rxjs";
import { IProduct } from '../interfaces/product.model';
import { INewProduct } from "../interfaces/new-product.model";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) {}
  baseUrl: string = '/api/Advert';
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${this.baseUrl}`).pipe(map((products) => {
      return products.sort((a, b) => {
        return (new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      })
    }))
  }
  createProduct(product: INewProduct): Observable<IProduct> {
    return this._http.post<IProduct>(`${this.baseUrl}`, product)
  }
  getById(id:string):Observable<IProduct> {
    return this._http.get<IProduct>(`${this.baseUrl}/${id}`)
  }
}
