import { Injectable } from '@angular/core';
import { ENDPOINTS } from '@app/endpoints';
import { Observable } from 'rxjs';
import { Book } from '../entity/book';
import { Movie } from '../entity/movie';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService extends HttpClientService {

   URL=ENDPOINTS.MOVIE_DATA;
  public getResults(url:string,params:any):Observable<Movie[]>
  {
    return this.getAll(this.URL,params)
  }

  public getResultId(url:string,params:any):Observable<Movie>
  {
    return this.getById(this.URL,params)
  }

  public createData(url:string,data:any):Observable<any>
  {
    return this.create(this.URL,data)
  }

  public updateData(url:string,params:any,data:any):Observable<Book>
  {
    return this.update(this.URL,params,data)
  }

  public deleteData(url:string,params:any):Observable<any>
  {
    return this.delete(this.URL,params)
  }

}
