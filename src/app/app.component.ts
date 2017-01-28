import { Component ,OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { IAuthResponse } from './auth/authResponse';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  constructor(private _auth:AuthService){}
  ngOnInit(){
    /*
    this._auth.login('aranga','password').then(d=>{
      console.log(this._auth.isAuthenticate());
    }).catch(e=>console.log(e));*/
  }
}
