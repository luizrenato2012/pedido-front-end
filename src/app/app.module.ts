import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemPedidoModule } from './item-pedido/item-pedido.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ItemPedidoModule,
    CarrinhoModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
