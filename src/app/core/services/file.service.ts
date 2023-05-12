import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private _http: HttpClient) {}
  baseUrl: string = '/api/File';

  uploadFile(file: File):Observable<string>{
    const fileData = new FormData()
    fileData.append('file', file, file.name)
    return this._http.post<string>(`${this.baseUrl}`, fileData).pipe(
      map((guid) => {
        return `http://90.156.209.122:5000/File/${guid}`
      })
    );
  }
}
