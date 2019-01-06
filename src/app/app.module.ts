import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemPedidoModule } from './item-pedido/item-pedido.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ItemPedidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
