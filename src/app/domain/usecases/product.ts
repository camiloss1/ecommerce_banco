import { Observable } from "rxjs";
import { Injectable } from "@angular/core"
import { ProductGateway } from "../models/Product/gateway/product-gateway";
import { Product } from "../models/Product/product";
@Injectable({
    providedIn: 'root'
})
export class ProductUseCase {
    constructor(private _productGateway: ProductGateway) { }
    getProductImagenes(): Observable<any[]> {
        ///logica
        return this._productGateway.getProductImages();
    }
}