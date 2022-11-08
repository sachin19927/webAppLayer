import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { LiberarymanagementComponent } from './liberarymanagement/liberarymanagement.component';
import { RouterModule } from '@angular/router';
import { libraryRoutes } from './library.routing';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ViewComponent,
    ListComponent,
    LiberarymanagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(libraryRoutes)
  ]
})
export class LibraryModule { }
