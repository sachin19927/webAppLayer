import { Routes } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { LiberarymanagementComponent } from "./liberarymanagement/liberarymanagement.component";
import { ListComponent } from "./list/list.component";
import { ViewComponent } from "./view/view.component";

export const libraryRoutes:Routes=[
 {
  path:'', component:LiberarymanagementComponent,
  children:[
    {path:'add',component:AddComponent},
    {path:'edit',component:EditComponent},
    {path:'view',component:ViewComponent},
    {path:'list',component:ListComponent}
  ]
 }
]
