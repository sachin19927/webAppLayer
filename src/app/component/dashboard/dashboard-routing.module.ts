import { Routes } from "@angular/router";
import { BoardComponent } from "./board/board.component";

export const DashboardRoutes: Routes = [

  { path: '', component:BoardComponent, pathMatch: 'full' }
];
