import { NgModule } from '@angular/core';

import { SharedModule} from '../shared/shared.module';
import { AuthService} from './auth.service';
import { AuthTokenService } from './auth-token.service';
@NgModule({
    imports:[SharedModule],
    providers:[AuthService,AuthTokenService]
  
})
export class AuthModule{

}