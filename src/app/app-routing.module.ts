import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './component/dashboard/board/board.component';
import { FeebackpageComponent } from './component/feedback/feebackpage/feebackpage.component';
import { PageNotFoundComponent } from './component/generic/page-not-found/page-not-found.component';
import { ServerErrorComponent } from './component/generic/server-error/server-error.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { BasicGuard } from './guard/basic-guard';
import { ErrorPageComponent } from './component/generic/error-page/error-page.component';

const routes: Routes = [

  {
  path: 'dashboard',
  //canActivate:[AuthGuardGuard],
  loadChildren:()=>import('./component/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path: 'library',
    //canActivate:[AuthGuardGuard],
    //canActivateChild:[AuthGuardGuard],
    loadChildren:()=>import('./component/library/library.module').then(m=>m.LibraryModule)
  },

  {
    path: 'movie',
    canActivate:[AuthGuardGuard],
    loadChildren:()=>import('./component/movie/movie.module').then(m=>m.MovieModule)
  },

  {
    path: 'food',
    canActivate:[BasicGuard],
    loadChildren:()=>import('./component/food/food.module').then(m=>m.FoodModule)
  },

  {
    path: 'product',
    canActivate:[BasicGuard],
    loadChildren:()=>import('./component/product/product.module').then(m=>m.ProductModule)
  },
  {
    path: 'receipe',
    canActivate:[BasicGuard],
    loadChildren:()=>import('./component/receipe/receipe.module').then(m=>m.ReceipeModule)
  },
  {
    path: 'feedback',
    canActivate:[BasicGuard],
    component: FeebackpageComponent
  },




  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //{ path: '404', component: PageNotFoundComponent},
  { path: '404', component: ErrorPageComponent, },
  { path: '500', component: ServerErrorComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
