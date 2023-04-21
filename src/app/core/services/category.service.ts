import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {ICategory} from "../interfaces/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl: string = '/api/Category';
  constructor(private _http: HttpClient) {}
  getCategories():Observable<any>{
    return this._http.get<ICategory[]>(`${this.baseUrl}`)
  }
}
