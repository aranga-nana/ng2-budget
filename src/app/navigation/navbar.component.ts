import { Component } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { IToken } from '../auth/token';
@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html'
})
export class NavbarComponent{

    constructor(private _auth:AuthService){
        _auth.authEvent$.subscribe((token:IToken)=>this.onAuthEvent(token));
    }

    onAuthEvent(token:IToken):void{
        console.log('Login event',token);
    }
}