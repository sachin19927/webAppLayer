import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './component/dashboard/board/board.component';
import { BasicGuard } from './guard/basic-guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
  path: 'dashboard',
  canActivate:[BasicGuard],
  loadChildren:()=>import('./component/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
