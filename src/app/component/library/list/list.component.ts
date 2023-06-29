import { Component, OnInit ,OnDestroy } from '@angular/core'
import {  ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/entity/book';
import { CentralLoggerService } from 'src/app/service/central-logger.service';
import { LibraryServiceService } from 'src/app/service/library-service.service';
import { Observable , interval , Subscription  } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit,OnDestroy {

  books!: Book[];
  isLoading = false;
  filterByKeyValue = '';
  errorMsg = null;
  private firstSubscription!: Subscription;
  libraryStatus =new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Online');
    },2000);
  })

  columnsToDisplay = ['No','Title', 'Category', 'Author', 'Year','Published Date','Price','Action'];
  KeyToDisplay = ['id','title', 'category', 'author', 'year','insertedDate','price','action'];

  constructor(private httpService: LibraryServiceService,
              private logginService: CentralLoggerService,
              private router:Router,
              private route: ActivatedRoute,
              private httpGenric:HttpClientService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.logginService.logToConsole('log')
    this.logginService.infoToConsole('info')
    this.logginService.debugToConsole('debug')
    this.logginService.errorToConsole('error')
    this.getBooks()
    //this.isLoading = false;
   this.firstSubscription = interval(1000).subscribe(count => {
      console.log(count)
    })

    const customObservable = new Observable(observer =>{
        let count=0 ;
        setInterval(()=>{
          observer.next(count);
          if(count==7)
          observer.complete();
          if(count>5)
          {
            observer.error(new Error('count Exceeds'))
          }
          count++;
        },1000);
    } );

    customObservable.pipe(filter((data:any)=>{
      return data>2;
  }) ,map( (data:any) =>{
    return 'Record Added :' + (data+1);
  }))
  .subscribe(data =>{
      console.log(data)
    },error =>{
      console.log(error)
    },()=>{
      console.log('Completed')
    });
  }




  ngOnDestroy():void{
    this.firstSubscription.unsubscribe();
  }

  private getBooks() {
    this.httpService.getResults('',null).subscribe(books =>
      {
        console.log(books)
        this.books = books;
        this.isLoading= false;
    },
    error =>{
      this.errorMsg=error;
  });
    this.httpService.libaryDatafor.emit(this.books);
  }

  addBooks()
  {
    const refreshData=this.books;
    const postData= {
    "title":"Kings Men",
    "category":"Action",
    "author":"SACHIN",
    "email":"sachin19927@gmail.com",
    "year":2023,
    "price":100.5
  };
    this.httpService.createData('',postData).subscribe(data=>
      {
        console.log(data);
        refreshData.push(data)
        console.log
      }
      ,error =>{
        this.errorMsg=error;
    });
    this.books=refreshData;
    this.httpGenric.activateEmiter.emit(true);
    this.httpGenric.activateSubject.next(true);
  }

  loadBookToEdit(id:number)
  {
    //this.router.navigate(['/library/view',id,'edit'],{queryParams:{'allwedTo':true},fragment:'loading'});
    this.router.navigate(['/library/view',id,'edit'],{queryParams:{'allwedTo':true},fragment:'loading'})

  }

  deleteBook(id:number){
    this.httpService.deleteData('',id).subscribe(()=>
    {
      this.getBooks();
    },error =>{
        this.errorMsg=error;
    })

  }





}
function ngOnDestroy() {
  throw new Error('Function not implemented.');
}

