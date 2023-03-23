import { Routes } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { LibraryManagementComponent } from "./library.management/library.management.component";
import { ListComponent } from "./list/list.component";
import { ViewComponent } from "./view/view.component";

export const libraryRoutes:Routes=[
 {
  path:'', component:LibraryManagementComponent,
  children:[
    {path:'add',component:AddComponent},
    {path:'view/:id/edit',component:EditComponent},
    //{path:'view/:id/:name',component:ViewComponent},
    {path:'view/:id',component:ViewComponent},
    {path:'list',component:ListComponent}
  ]
 }
]
