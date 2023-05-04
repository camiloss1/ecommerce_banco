import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductGateway } from './domain/models/Product/gateway/product-gateway';
import { UserGateway } from './domain/models/User/gateway/user-gateway';
import { ProductsService } from './infraestructure/driven-adapter/services/products/products.service';
import { UserService } from './infraestructure/driven-adapter/services/user.service';
import { DefaultModule } from './UI/layouts/default/default.module';
import { OutsideModule } from './UI/layouts/outside/outside.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    OutsideModule,
    HttpClientModule
  ],
  providers: [{ provide: UserGateway, useClass: UserService },
  { provide: ProductGateway, useClass: ProductsService },],
  bootstrap: [AppComponent]
})
export class AppModule { }
