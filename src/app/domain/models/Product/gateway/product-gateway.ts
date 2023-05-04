import { Observable } from "rxjs"
import {  Product } from "../product"

export abstract class ProductGateway {
    abstract getProductImages(): Observable<any[]>;
}