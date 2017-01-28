import { Http, Response, Headers,RequestMethod ,BaseRequestOptions} from '@angular/http';

import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/rx';


import { environment } from '../../environments/environment';
import { Base64 } from './base64';
import { IToken, AuthToken } from './token';
import { AppSettings } from '../shared/settings';
import { IUser } from '../user/user';
import { AuthTokenService } from './auth-token.service';
import { IAuthResponse } from './authResponse'


@Injectable()
export class AuthService {

    authEvent$: EventEmitter<IToken>;
    private authToken: IToken = new AuthToken(null);
    private loginUser:IUser;
   



    constructor(private _http: Http, private _authTokenService: AuthTokenService) {
        this.authEvent$ = new EventEmitter();
    }

    login(username: string, password: string): Promise<IUser> {

        return this._authTokenService.requestToken(username, password).then((r: IAuthResponse) => {

            this.authToken = new AuthToken(r);
            return this.getUserInfo().then((u:IUser)=>{
                    this.loginUser = u;
                    return u;
            });

        });


    }


    isAuthenticate(): boolean {

        return this.authToken.isValid();
    }

    getToken():string{
        return this.authToken.token;
    }

    triggerSuccess(): void {
        this.authEvent$.emit(this.authToken);
    }

    getUserInfo(): Promise<IUser> {
        let _headers = new Headers({'Content-Type': 'application/json'});
     
        var options = new BaseRequestOptions();

        options.headers.append('Authorization', 'Bearer ' + this.authToken.token);
        let url = environment.baseApi + '/user/profile';
        console.log('url',url);
        console.log('header',Headers);
        return this._http.get(url,options)
            .map((r: Response) => <IUser>r.json())
            .toPromise()
            .catch(err => {
                return Promise.reject(err);
            });
    }
    getCurrentUser(){
        this.loginUser;
    }

}