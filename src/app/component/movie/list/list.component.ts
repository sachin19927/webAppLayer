import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/entity/movie';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movies!: Movie[];
  isLoading = true;




  constructor(private httpService: MovieServiceService) {}

  ngOnInit(): void {
    this.getMovies()
    this.isLoading=false;
  }

  private getMovies() {
    this.httpService.getResults('',null).subscribe(movies => this.movies = movies);
  }

}
