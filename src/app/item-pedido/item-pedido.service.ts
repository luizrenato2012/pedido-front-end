import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { RespostaTotaliza } from './resposta-totaliza';

const API_URL="http://localhost:8080/api/itens/inicio",
      API_TOTALIZA="http://localhost:8080/api/itens/total";
@Injectable({
  providedIn: 'root'
})
export class ItemPedidoService {

  produtos: Produto[];

  constructor(private httpClient : HttpClient) {
  }

  listaItens(): Produto[] {
  //  console.log('ItemPedidoService - listaItens');
    //return this.httpClient.get<Produto[]> (API_URL);
    this.httpClient.get(API_URL)
      .map(produtos => {
          this.produtos = produtos;
          return this.produtos;
      );
  }

  totalizaItens() {
    return this.httpClient.get<RespostaTotaliza>(API_TOTALIZA);
  }
}
