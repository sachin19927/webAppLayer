import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { ReceipeManagementComponent } from './receipe.management/receipe.management.component';
import { RouterModule } from '@angular/router';
import { recipeRoutes } from './receipe.routing';
import { MatModule } from 'src/app/mat-module.module';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ViewComponent,
    ListComponent,
    ReceipeManagementComponent
  ],
  imports: [
    CommonModule,
    MatModule,
    RouterModule.forChild(recipeRoutes)
  ]
})
export class ReceipeModule { }
