import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { ILoginModel } from './loginModel';
@Component({
    templateUrl :'./login.component.html'
})
export class LoginComponent implements OnInit{
    model:ILoginModel={username:'',password:''};
    constructor(private _auth:AuthService, private _router: Router){
      
    }
    
    ngOnInit(){
       console.log('router:',this._router);
    }
    login(){
        console.log(this.model.username);
        let self = this;
        this._auth.login(this.model.username,
            this.model.password)
                .then(r=>{
                    self.success(r) ;
                    
                })
                .catch(e=>console.log(e));
    }
    success(e){
        console.log(this._auth);
        this._auth.triggerSuccess();
        this._router.navigate(['/dashboard']);
        
    }
}