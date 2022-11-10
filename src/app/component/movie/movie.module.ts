import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { MovieManagementComponent } from './movie.management/movie.management.component';
import { RouterModule } from '@angular/router';
import { movieRoutes } from './movie.routing';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ViewComponent,
    ListComponent,
    MovieManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(movieRoutes)
  ]
})
export class MovieModule { }
