import { NgModule } from "@angular/core";
import { ItemPedidoListaComponent } from "./item-pedido-lista/item-pedido-lista.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ItemPedidoGrupoComponent } from './item-pedido-grupo/item-pedido-grupo.component';
@NgModule({
    declarations: [ItemPedidoListaComponent, ItemPedidoGrupoComponent],
    exports: [ItemPedidoListaComponent],
    imports: [HttpClientModule, CommonModule]
   
})
export class ItemPedidoModule { }