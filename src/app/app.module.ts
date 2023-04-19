import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './UI/layouts/default/default.module';
import { OutsideComponent } from './UI/layouts/outside/outside.component';
import { OutsideModule } from './UI/layouts/outside/outside.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    OutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
