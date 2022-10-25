import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { MoviesComponent } from './movies/movies.component';
import { LibraryComponent } from './library/library.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    BoardComponent,
    MoviesComponent,
    LibraryComponent,
    ProductsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
