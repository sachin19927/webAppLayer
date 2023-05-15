import { Component, OnInit } from '@angular/core';
import { environment } from '@app/env';
import { AuthServiceService } from './service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = environment.appName;


  constructor(private authService:AuthServiceService ){}

  ngOnInit(): void {
    //alert(this.authService.loggedIn)
  }

  onLogin() {
    if(!this.authService.loggedIn)
    this.authService.login();
    else
    this.authService.logOut();

    alert(this.authService.loggedIn)
  }

}



