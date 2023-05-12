import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from "rxjs";
import {ICategory} from "../interfaces/category.model";
import { formatCategories, getCategoriesTree, } from "../../utils/formats";
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
  getBreadCrumbs(id:string):Observable<any> {
    return this._http.get<ICategory[]>(`${this.baseUrl}`).pipe(
      map((categories) =>{
         return getCategoriesTree(categories, id).map((item) => {
           return {
             label: item.name,
             routerLink: `/category?id=${item.id}`,
           }
         })
      })
    )
  }
}
