import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { MoviesComponent } from './movies/movies.component';
import { LibraryComponent } from './library/library.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard-routing.module';



@NgModule({
  declarations: [
    BoardComponent,
    MoviesComponent,
    LibraryComponent,
    ProductsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes)
  ]
})
export class DashboardModule { }
