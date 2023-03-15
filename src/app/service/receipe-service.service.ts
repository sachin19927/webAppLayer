import { Injectable } from '@angular/core';
import { ENDPOINTS } from '@app/endpoints';
<<<<<<< HEAD
import { Observable } from 'rxjs/internal/Observable';
import { Receipe } from '../entity/receipe';
=======
import { Observable } from 'rxjs';
import { Book } from '../entity/book';
>>>>>>> d64a5c7980de1dc30f736f9775adb36c4336bbf5
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
  
})
<<<<<<< HEAD
export class ReceipeServiceService extends HttpClientService{

  URL=ENDPOINTS.RECEIPE_DATA ;
  public getResults(url:string,params:any):Observable<Receipe[]>
=======
export class ReceipeServiceService extends HttpClientService {

  URL=ENDPOINTS.LIBRARY_DATA;
  public getResults(url:string,params:any):Observable<Book[]>
>>>>>>> d64a5c7980de1dc30f736f9775adb36c4336bbf5
  {
    return this.getAll(this.URL,params)
  }

<<<<<<< HEAD
  public getResultId(url:string,params:any):Observable<Receipe>
=======
  public getResultId(url:string,params:any):Observable<Book>
>>>>>>> d64a5c7980de1dc30f736f9775adb36c4336bbf5
  {
    return this.getById(this.URL,params)
  }

  public createData(url:string,data:any):Observable<any>
  {
    return this.create(this.URL,data)
  }

<<<<<<< HEAD
  public updateData(url:string,params:any,data:any):Observable<Receipe>
=======
  public updateData(url:string,params:any,data:any):Observable<Book>
>>>>>>> d64a5c7980de1dc30f736f9775adb36c4336bbf5
  {
    return this.update(this.URL,params,data)
  }

  public deleteData(url:string,params:any):Observable<any>
  {
    return this.delete(this.URL,params)
  }
}
