import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatModule } from './mat-module.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericModule } from './component/generic/generic.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './inmemory_config/DataService';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    GenericModule,
    FlexLayoutModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService, {
      passThruUnknownUrl: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
