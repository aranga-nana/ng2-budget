import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IToken} from '../auth/token';

@Component({
    //moduleId: module.id,
    selector:'app-sidenav',
    templateUrl:'./sidenav.component.html',
    styleUrls:['./sidenav.component.css']
})
export class SidenavComponent{
    display:boolean=false;
    constructor(private _auth:AuthService){
       _auth.authEvent$.subscribe((token:IToken)=>this.onAuthEvent(token));

    }
    onAuthEvent(token:IToken):void{
        console.log('Auth event',token);
        this.display = true;
    }
}