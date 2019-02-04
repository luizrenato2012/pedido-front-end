import { NgModule } from "@angular/core";
import { GrupoItemCarrinhoComponent } from "./grupo-item-carrinho/grupo-item-carrinho.component";
import { ItemCarrinhoComponent } from "./item-carrinho/item-carrinho.component";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app.routing.module";

@NgModule({
    declarations : [GrupoItemCarrinhoComponent, ItemCarrinhoComponent],
    imports : [
        CommonModule, AppRoutingModule
    ],
    exports : [
        GrupoItemCarrinhoComponent
    ]
}

)
export class CarrinhoModule {
    
}