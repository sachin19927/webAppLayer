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
  filterByKeyValue = '';
  libraryStatus =new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Online');
    },2000);
  })

  columnsToDisplay = ['name', 'url', 'description', 'author'];

  constructor(private httpService: LibraryServiceService,
              private logginService: CentralLoggerService,
              private router:Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.logginService.logToConsole('log')
    this.logginService.infoToConsole('info')
    this.logginService.debugToConsole('debug')
    this.logginService.errorToConsole('error')
    this.getBooks()
  }

  private getBooks() {
    this.httpService.getResults('',null).subscribe(books => this.books = books);
    this.httpService.libaryDatafor.emit(this.books);
  }

  addBooks()
  {
    this.books.push({"id":105,"name":"Life of Sachin","category":"horror","author":"sachin","year":2022,"publishedDate":new Date,"price":210.34})
  }

  loadBookToEdit(id:number)
  {
    //this.router.navigate(['/library/view',id,'edit'],{queryParams:{'allwedTo':true},fragment:'loading'});
    this.router.navigate(['/library/view',id,'edit'],{queryParams:{'allwedTo':true},fragment:'loading'})

  }


}
