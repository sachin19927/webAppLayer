import { Routes } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { ListComponent } from "./list/list.component";
import { ProdductManagementComponent } from "./prodduct.management/prodduct.management.component";
import { ViewComponent } from "./view/view.component";



export const productRoutes:Routes=[
 {
  path:'', component:ProdductManagementComponent,
  children:[
    {path:'add',component:AddComponent},
    {path:'edit',component:EditComponent},
    {path:'view',component:ViewComponent},
    {path:'list',component:ListComponent}
  ]
 }
]
