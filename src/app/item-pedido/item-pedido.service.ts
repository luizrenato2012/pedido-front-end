import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { RespostaTotaliza } from './resposta-totaliza';
import { Observable } from 'rxjs';
import { ItemPedido } from './item-pedido';
import { RespostaItemTotaliza } from './resposta-item-totaliza';

const HOST_API = "http://localhost:8080";
const API_URL=       HOST_API +"/api/itens/inicio";
const API_TOTALIZA=  HOST_API +"/api/itens/total_item";
const APIT_PEDIDO = HOST_API +"/api/pedidos";


@Injectable({
  providedIn: 'root'
})
export class ItemPedidoService {

  produtos: Produto[];

  constructor(private httpClient : HttpClient) {
  }

  listaItens(): Observable<RespostaTotaliza> {
    return this.httpClient.get<RespostaTotaliza> (API_URL);
  }

  setProdutos(lista: Produto[]) {
    this.produtos = lista;
  }

  totalizaItens(produtos: Produto[]) : Observable<RespostaItemTotaliza> {
    let itensAlterados = this.getItensAlterados(produtos);
    return this.httpClient.post<RespostaItemTotaliza>(API_TOTALIZA, itensAlterados);
  }

  getItensAlterados(produtos : Produto[]) : ItemPedido[] {
    let alterados = produtos.filter(item => ( item.valorTotal != undefined && item.valorTotal != 0  
        || (item.idItem!= undefined ||  item.idItem!=null) )); 
    let retorno = alterados.map( (item) => { 
    return  new ItemPedido (
          item.idItem,
          item.idProduto,
          item.numero,
          item.valorUnitario, 
          item.quantidade, 
          item.valorTotal,
          item.atual
      )
    });
    return retorno;
  }

  gravaPedido(produtos: Produto[]) {
    let alterados = produtos.filter(item => ( item.valorTotal != undefined && item.valorTotal != 0  
      || (item.idItem!= undefined ||  item.idItem!=null) ));
      return this.httpClient.put<Number>(APIT_PEDIDO, produtos);

  }

}
