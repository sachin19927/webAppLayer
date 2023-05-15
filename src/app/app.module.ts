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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FeedbackModule } from './component/feedback/feedback.module';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { HttpLoggerInterceptorService } from './service/http-logger-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatModule,
    GenericModule,
    FlexLayoutModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService, {
      passThruUnknownUrl: true
    }),
    FeedbackModule
  ],
  providers:
  [{provide: HTTP_INTERCEPTORS, useClass:HttpInterceptorService,multi:true},
    {provide: HTTP_INTERCEPTORS, useClass:HttpLoggerInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
