import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api'
import { Observable } from 'rxjs';
import MovieDetails from '../json_sample/yts.json';
import BookDetails from '../json_sample/lib.json';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
   let bookDetails=BookDetails;
   let movieDetails=MovieDetails;
   if(bookDetails.length>0)
   return {books:bookDetails, movies:movieDetails };
   else
  throw new Error('Method not implemented.');
  }

}

