import { UserGateway } from "../models/User/gateway/user-gateway";
import { Token } from "../models/User/token";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core"
import { User } from "../models/User/user";
@Injectable({
    providedIn: 'root'
})
export class Userusecase {
    constructor(private _userGateway: UserGateway) { }
    login(email: string, password: string): Observable<Token> {
        //en este lugar se aplica todo lo correspondiente a las reglas de negocio del proceso
        return this._userGateway.login(email, password);
    }

    getUserByEmail(email: string): Observable<User> {
        //aplicar una logica de negocio
        return this._userGateway.getUserByEmail(email);
    }
}
