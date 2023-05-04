import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductGateway } from 'src/app/domain/models/Product/gateway/product-gateway';
import {  Product } from 'src/app/domain/models/Product/product';
import { GenericService } from 'src/app/infraestructure/helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements ProductGateway {

  constructor( private genericService:GenericService) { }
  private _url = 'https://run.mocky.io';
  getProductImages(): Observable<any[]> {
    return this.genericService.get<any[]>(this._url,'v3/b2456a53-4d33-4dd7-9e97-0ad0f3343c45');
  }
}
