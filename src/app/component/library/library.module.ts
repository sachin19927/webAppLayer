import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { libraryRoutes } from './library.routing';
import { LibraryManagementComponent } from './library.management/library.management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { WordShortnerPipe } from 'src/app/shared/pipes/word-shortner.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ViewComponent,
    ListComponent,
    LibraryManagementComponent,

  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(libraryRoutes),
    SharedModule
  ],
  providers:[]
})
export class LibraryModule { }
