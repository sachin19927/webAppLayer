import { Component, OnInit } from '@angular/core';
import { Receipe } from 'src/app/entity/receipe';
import { ReceipeServiceService } from 'src/app/service/receipe-service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { LibraryServiceService } from 'src/app/service/library-service.service';
import { Book } from 'src/app/entity/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*', minHeight: "*"})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListComponent implements OnInit {

  receipes!: Receipe[];
  columnsToDisplay = ['name', 'url', 'description', 'author'];
  expandedElement!: Receipe;

  constructor(private httpService: ReceipeServiceService, private libraryService: LibraryServiceService) {}

  ngOnInit(): void {
    this.libraryService.libaryDatafor.subscribe((books:Book[])=> alert('data shared'));
    this.getMReceipes()
  }

  private getMReceipes() {
    this.httpService.getResults('',null).subscribe(receipes => this.receipes = receipes);
  }

}
