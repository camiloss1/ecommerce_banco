import {Token} from "../token"
import { Observable } from "rxjs";
import { User } from "../user";

export abstract class UserGateway {
    abstract login(email:string,password:string):Observable<Token>;
    abstract getUserByEmail(email:string):Observable<User>;
}