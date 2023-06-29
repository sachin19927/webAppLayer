import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';
import { Observable,Subject,throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ApiLoggerService } from '../src/app/service/api-logger.service';



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  httpOptions =
     new HttpHeaders({
      'Content-Type': 'application/json'
    })

    activateEmiter = new EventEmitter<boolean>();
    activateSubject = new Subject<boolean>();

  constructor(private httpClient: HttpClient,private apiLogger:ApiLoggerService) { }

  create(url:string,data:any): Observable<any> {
    return this.httpClient.post<any>(url , JSON.stringify(data), {
      headers:this.httpOptions,
      observe:'response',
      responseType:'json'
    })
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getById(url:string,params:number): Observable<any> {

    return this.httpClient.get<any>(url+'/'+params ,{headers:this.httpOptions})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(url:string,params:any): Observable<any> {
    return this.httpClient.get<any>(url,{headers:this.httpOptions})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  public getDataByReqParams(url:string,reqParams:HttpParams):Observable<any>
  {
    return this.httpClient.get(url,{headers: this.httpOptions, params:reqParams})
  }

  update(url:string,params:any, data:any): Observable<any> {
    return this.httpClient.put<any>(url, JSON.stringify(data), {headers:this.httpOptions})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(url:string,params:any){
    return this.httpClient.delete(url+'/'+params,{
      headers:this.httpOptions,
      observe:'events',
      responseType:'json'
    })
    .pipe(
      tap(event=>{

        if(event.type==HttpEventType.Sent){console.log("tap log sent:"+event)}
      }),
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
