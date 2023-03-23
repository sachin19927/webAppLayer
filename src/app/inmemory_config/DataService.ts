import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api'
import { Observable } from 'rxjs';
import MovieDetails from '../json_sample/yts.json';
import BookDetails from '../json_sample/lib.json';
import ReceipeDetails from '../json_sample/recipes.json';
import ZomatoDetails from '../json_sample/zomato.json';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
   const bookDetails=BookDetails;
   const movieDetails=MovieDetails;
   const receipeDetails=ReceipeDetails;
   const zomatoDetails=ZomatoDetails;
   if(bookDetails.length>0)
   return {books:bookDetails, movies:movieDetails,receipes: receipeDetails};
   else
  throw new Error('Method not implemented.');
  }

}

