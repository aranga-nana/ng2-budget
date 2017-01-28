
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from '../auth/http.service';

import { IUser } from '../user/user';
import { environment } from '../../environments/environment';
@Injectable()
export class UserService {

    constructor(private _http: HttpService) { }
    getUserInfo(): Promise<IUser> {
        return this._http.get(environment.baseApi + '/user/profile')
            .map((r: Response) => <IUser>r.json())
            .toPromise()
            .catch(err => {
                return Promise.reject(err);
            });
    }
}