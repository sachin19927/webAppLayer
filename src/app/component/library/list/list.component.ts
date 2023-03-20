import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/entity/book';
import { HttpClientService } from 'src/app/service/http-client.service';
import { LibraryServiceService } from 'src/app/service/library-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  books!: Book[];
  filterByKeyValue = '';

  constructor(private httpService: LibraryServiceService) {}

  ngOnInit(): void {
    this.getBooks()
  }

  private getBooks() {
    this.httpService.getResults('',null).subscribe(books => this.books = books);
  }

  addBooks()
  {
    this.books.push({"id":105,"name":"Life of Sachin","category":"horror","author":"sachin","year":2022,"publishedDate":new Date,"price":210.34})
  }

}
