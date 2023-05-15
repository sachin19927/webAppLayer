import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/entity/book';
import { CentralLoggerService } from 'src/app/service/central-logger.service';
import { LibraryServiceService } from 'src/app/service/library-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  books!: Book[];
  isLoading = false;
  filterByKeyValue = '';
  errorMsg = null;
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
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.logginService.logToConsole('log')
    this.logginService.infoToConsole('info')
    this.logginService.debugToConsole('debug')
    this.logginService.errorToConsole('error')
    this.getBooks()
    //this.isLoading = false;
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
        refreshData.push(data
      )}
      ,error =>{
        this.errorMsg=error;
    });
    this.books=refreshData;
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
