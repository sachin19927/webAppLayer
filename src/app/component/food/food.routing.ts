import { Routes } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { FoodManagementComponent } from "./food.management/food.management.component";
import { ListComponent } from "./list/list.component";
import { ViewComponent } from "./view/view.component";


export const foodRoutes:Routes=[
 {
  path:'', component:FoodManagementComponent,
  children:[
    {path:'add',component:AddComponent},
    {path:'edit',component:EditComponent},
    {path:'view',component:ViewComponent},
    {path:'list',component:ListComponent}
  ]
 }
]
