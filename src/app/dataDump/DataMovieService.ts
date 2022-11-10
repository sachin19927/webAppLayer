import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api'
import { Observable } from 'rxjs';
import movieDetails from './yts.json';

@Injectable({
  providedIn: 'root'
})
export class DataMovieService implements InMemoryDbService{

  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
   let bookDetails=movieDetails;
   if(bookDetails.length>0)
   return {books:bookDetails};
   else
  throw new Error('Method not implemented.');
  }

}

