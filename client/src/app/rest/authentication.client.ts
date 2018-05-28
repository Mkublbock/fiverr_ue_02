import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RestClient } from './rest.client';
import { AuthenticationRequest } from '../models';
import { TokenModel } from '../models/token.model';

@Injectable()
export class AuthenticationClient extends RestClient {
  constructor(httpClient: HttpClient) {
    super('/authentication', httpClient);
  }

  public authenticate(authenticationRequest: AuthenticationRequest): Observable<TokenModel> {
    return this.post(null, authenticationRequest);
  }
}
