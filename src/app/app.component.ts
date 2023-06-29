import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '@app/env';
import { AuthServiceService } from './service/auth-service.service';
import { HttpClientService } from './service/http-client.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{
  title = environment.appName;
  private alertSubcription!: Subscription;
  addedData= false;

  constructor(private authService:AuthServiceService,private httpGenericSerice:HttpClientService ){}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

    this.httpGenericSerice.activateEmiter.subscribe(data=>{
      if(data){
      //this.addedData=true;
    }
    });

    this.httpGenericSerice.activateSubject.subscribe(data=>{
      if(data){
      this.addedData=true;
    }
    })
  }

  onLogin() {
    if(!this.authService.loggedIn)
    this.authService.login();
    else
    this.authService.logOut();

    alert(this.authService.loggedIn)
  }

}



