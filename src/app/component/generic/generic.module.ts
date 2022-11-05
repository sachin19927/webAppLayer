import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MatModule } from 'src/app/mat-module.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    PageNotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    CommonModule,
    MatModule
  ]
})
export class GenericModule { }
