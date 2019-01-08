import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { RespostaTotaliza } from './resposta-totaliza';
import { Observable } from 'rxjs';

const API_URL="http://192.168.30.1:8080/api/itens/inicio",
      API_TOTALIZA="http://192.168.30.1:8080/api/itens/total";
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

  totalizaItens() {
    return this.httpClient.get<RespostaTotaliza>(API_TOTALIZA);
  }

  setProdutos(lista: Produto[]) {
    this.produtos = lista;
  }
}
