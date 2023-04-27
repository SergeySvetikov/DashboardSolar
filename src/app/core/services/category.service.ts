import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from "rxjs";
import {ICategory} from "../interfaces/category.model";
import { formatCategories } from "../../utils/formats";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl: string = '/api/Category';

  constructor(private _http: HttpClient) {
  }

  getCategories(): Observable<any> {
    return this._http.get<ICategory[]>(`${this.baseUrl}`).pipe(
      map((categories) =>{
        return formatCategories(categories)
      })
    )
  }
  getById(id:string):Observable<ICategory> {
    return this._http.get<ICategory>(`${this.baseUrl}` + id)
  }
}
