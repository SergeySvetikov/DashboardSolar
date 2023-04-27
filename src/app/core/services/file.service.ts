import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private _http: HttpClient) {}
  baseUrl: string = '/api/File';

  uploadFile(file: File): Observable<string> {
    const fileData = new FormData();
    fileData.append('file', file, file.name);

    return this._http.post<string>( `${this.baseUrl}`, fileData).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}

