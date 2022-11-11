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

  constructor(private httpService: LibraryServiceService) {}

  ngOnInit(): void {
    this.getBooks()
  }

  private getBooks() {
    this.httpService.getResults('',null).subscribe(books => this.books = books);
  }

}
