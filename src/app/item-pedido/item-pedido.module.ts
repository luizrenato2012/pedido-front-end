import { NgModule } from "@angular/core";
import { ItemPedidoComponent } from "./item-pedido.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ItemPedidoComponent],
    exports: [ItemPedidoComponent],
    imports: [HttpClientModule, CommonModule]
})
export class ItemPedidoModule { }