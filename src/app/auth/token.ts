import {IAuthResponse} from './authResponse';
import { Base64} from './base64';
export interface IToken{
    token:string;
    ts:number;
    isValid():boolean;
}

export class AuthToken implements IToken{
    token:string;
    ts:number;
    constructor(r:IAuthResponse){
        if (!r){
            this.token = null;
            this.ts = null;
            return;
        }
        this.token = r.access_token;
        this.ts = new Date().getTime()+36000;
        console.log(this.ts);
     
    }

    isValid():boolean{

        if (!this.token){
            return false;
        }
        console.log('now',new Date());
        console.log('expire',this.ts);
        if (this.ts < new Date().getTime() || this.ts < 0){
            return false;
        }
        return true;
    }
} 
