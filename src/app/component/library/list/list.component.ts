import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/dataDump/book';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  books!: Book[];

  constructor(private httpService: HttpClientService) {}

  ngOnInit(): void {
    this.getBooks()
  }

  private getBooks() {
    this.httpService.getAll().subscribe(books => this.books = books);
  }

}
