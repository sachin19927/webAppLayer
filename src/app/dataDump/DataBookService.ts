import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBookService implements InMemoryDbService{

  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
   let bookDetails=[
    {id:101,name:'Life of Sachin',category:'horror',author:'sachin',year:2022,publishedDate:'07-09-1992'},
    {id:102,name:'Life of Sachin',category:'horror',author:'sachin',year:2022,publishedDate:'07-09-1992'},
    {id:103,name:'Life of Sachin',category:'horror',author:'sachin',year:2022,publishedDate:'07-09-1992'},
    {id:104,name:'Life of Sachin',category:'horror',author:'sachin',year:2022,publishedDate:'07-09-1992'},
    {id:105,name:'Life of Sachin',category:'horror',author:'sachin',year:2022,publishedDate:'07-09-1992'}
   ];
   if(bookDetails.length>0)
   return {books:bookDetails};
   else
  throw new Error('Method not implemented.');
  }

}

