import { Routes } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { ListComponent } from "./list/list.component";
import { ReceipeManagementComponent } from "./receipe.management/receipe.management.component";
import { ViewComponent } from "./view/view.component";

export const recipeRoutes:Routes=[
 {
  path:'', component:ReceipeManagementComponent,
  children:[
    {path:'add',component:AddComponent},
    {path:'edit',component:EditComponent},
    {path:'view',component:ViewComponent},
    {path:'list',component:ListComponent}
  ]
 }
]
