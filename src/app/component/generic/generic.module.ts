import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MatModule } from 'src/app/mat-module.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    MatModule
  ]
})
export class GenericModule { }
