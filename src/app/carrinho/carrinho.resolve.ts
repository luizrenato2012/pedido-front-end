import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Produto } from "../item-pedido/produto";
import { ItemPedidoService } from "../item-pedido/item-pedido.service";
import { Observable } from "rxjs";
import { RespostaTotaliza } from "../item-pedido/resposta-totaliza";
@Injectable({
    providedIn: "root"
})
export class CarrinhoResolve implements Resolve<RespostaTotaliza> {

    constructor(private itemPedidoService : ItemPedidoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<RespostaTotaliza> {
        return this.itemPedidoService.listaItens();
    }
}
