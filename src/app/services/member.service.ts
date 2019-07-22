import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IMemberHttp } from '../models/http-models/member-http.interface';

@Injectable()
export class UserService {
  usersUrl = `${environment.apiUrl}users.json`;

  constructor(private _HTTP: HttpClient) { }

  getUsers(): Observable<IMemberHttp> {
    return this._HTTP.get<IMemberHttp>(this.usersUrl);
  }
}
