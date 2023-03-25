import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/entity/movie';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @Input() movie!: Movie;
  @Input() rank = 0;

  constructor() { }
  ngOnInit(): void {
  }

}
