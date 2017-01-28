import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { IAuthResponse } from '../auth/authResponse';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthTokenService {

  constructor(private _http: Http) { }

  requestToken(username: string, password: string): Promise<IAuthResponse> {

    let user: any = {
      username: username,
      password: password
    }


    return this._http.post(environment.baseApi + '/auth', JSON.stringify(user))
      .map((response: Response) => <IAuthResponse>response.json())
      .toPromise()
      .catch((e: any) => {
        console.log(e);
        return Promise.reject(e);
      });
  }
}
