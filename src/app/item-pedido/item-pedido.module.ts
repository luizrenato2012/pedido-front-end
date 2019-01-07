import { NgModule } from "@angular/core";
import { ItemPedidoListaComponent } from "./item-pedido-lista/item-pedido-lista.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ItemPedidoDetalheComponent } from './item-pedido-detalhe/item-pedido-detalhe.component';

@NgModule({
    declarations: [ItemPedidoListaComponent, ItemPedidoDetalheComponent],
    exports: [ItemPedidoListaComponent],
    imports: [HttpClientModule, CommonModule]
})
export class ItemPedidoModule { }