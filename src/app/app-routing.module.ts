import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './component/dashboard/board/board.component';
import { PageNotFoundComponent } from './component/generic/page-not-found/page-not-found.component';
import { ServerErrorComponent } from './component/generic/server-error/server-error.component';
import { BasicGuard } from './guard/basic-guard';

const routes: Routes = [

  {
  path: 'dashboard',
  canActivate:[BasicGuard],
  loadChildren:()=>import('./component/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent},
  { path: '500', component: ServerErrorComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
