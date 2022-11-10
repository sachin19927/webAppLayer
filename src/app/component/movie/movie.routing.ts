import { Routes } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { ListComponent } from "./list/list.component";
import { MovieManagementComponent } from "./movie.management/movie.management.component";
import { ViewComponent } from "./view/view.component";

export const movieRoutes:Routes=[
 {
  path:'', component:MovieManagementComponent,
  children:[
    {path:'add',component:AddComponent},
    {path:'edit',component:EditComponent},
    {path:'view',component:ViewComponent},
    {path:'list',component:ListComponent}
  ]
 }
]
