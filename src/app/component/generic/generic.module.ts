import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MatModule } from 'src/app/mat-module.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CopyClipboardComponent } from './copy-clipboard/copy-clipboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ExportCsvExcelComponent } from './export-csv-excel/export-csv-excel.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    PageNotFoundComponent,
    ServerErrorComponent,
    ErrorPageComponent,
    CopyClipboardComponent,
    AboutUsComponent,
    ExportCsvExcelComponent
  ],
  imports: [
    CommonModule,
    MatModule
  ]
})
export class GenericModule { }
