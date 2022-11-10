import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { FoodManagementComponent } from './food.management/food.management.component';
import { RouterModule } from '@angular/router';
import { foodRoutes } from './food.routing';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ViewComponent,
    ListComponent,
    FoodManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(foodRoutes)
  ]
})
export class FoodModule { }
