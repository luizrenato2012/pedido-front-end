import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { RespostaTotaliza } from './resposta-totaliza';
import { Observable } from 'rxjs';
import { ItemPedido } from './item-pedido';
import { RespostaItemTotaliza } from './resposta-item-totaliza';

const API_URL="http://localhost:8080/api/itens/inicio",
      API_TOTALIZA="http://localhost:8080/api/itens/total";
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
    let itens=[];
    let total=0;
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
          item.valorTotal
      )
    });
  return retorno;
  }
}
