import { NgModule } from "@angular/core";
import { ItemPedidoListaComponent } from "./item-pedido/item-pedido-lista/item-pedido-lista.component";
import { GrupoItemCarrinhoComponent } from "./carrinho/grupo-item-carrinho/grupo-item-carrinho.component";
import { RouterModule, Routes } from "@angular/router";
import { CarrinhoResolve } from "./carrinho/carrinho.resolve";

const routes : Routes = [
    {path: '', component : ItemPedidoListaComponent},
    {path: 'itens', component : ItemPedidoListaComponent},
    {
        path: 'carrinho', 
        component : GrupoItemCarrinhoComponent,
        resolve : {
            pedido : CarrinhoResolve
        }
    }
];

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports : [
        RouterModule
    ]}
)
export class AppRoutingModule { }