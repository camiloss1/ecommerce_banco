import { Injectable } from '@angular/core';
import { Token } from "src/app/domain/models/User/token"
import { Observable } from "rxjs";
import { UserGateway } from "src/app/domain/models/User/gateway/user-gateway"
import { GenericService } from '../../helpers/generic.service';
import { User } from 'src/app/domain/models/User/user';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserGateway {

  constructor(private genericService: GenericService) { }
  getUserByEmail(email: string): Observable<User> {
    return this.genericService.get(this._url, 'v3/858da37c-0772-433f-8055-9851135f8c12', email);
  }
  private _url = 'https://run.mocky.io'
  login(email: string, password: string): Observable<Token> {
    return this.genericService.post<Token>(this._url, 'v3/8938dfe1-dfa9-4af7-836a-3e9706ead2ca', { email, password });
  }

}
