import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '@app/endpoints';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiLoggerService } from '../src/app/service/api-logger.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient,private apiLogger:ApiLoggerService) { }

  create(url:string,data:any): Observable<any> {
    return this.httpClient.post<any>(url , JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getById(url:string,params:number): Observable<any> {

    return this.httpClient.get<any>(url+'/'+params ,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(url:string,params:any): Observable<any> {
    return this.httpClient.get<any>(url,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(url:string,params:any, data:any): Observable<any> {
    return this.httpClient.put<any>(url, JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(url:string,params:any){
    return this.httpClient.delete(url, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
