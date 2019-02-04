import { NgModule } from "@angular/core";
import { ItemPedidoListaComponent } from "./item-pedido-lista/item-pedido-lista.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ItemPedidoGrupoComponent } from './item-pedido-grupo/item-pedido-grupo.component';
import { AppRoutingModule } from "../app.routing.module";
@NgModule({
    declarations: [ItemPedidoListaComponent, ItemPedidoGrupoComponent],
    exports: [ItemPedidoListaComponent],
    imports: [HttpClientModule, CommonModule, AppRoutingModule]
   
})
export class ItemPedidoModule { }