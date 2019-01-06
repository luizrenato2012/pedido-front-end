import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';

const API_URL="http://localhost:8080/api/itens/inicio";
@Injectable({
  providedIn: 'root'
})
export class ItemPedidoService {

  constructor(private httpClient : HttpClient) {
    console.log('Criando ItemPedidoService');
  }

  listaItens() {
    console.log('ItemPedidoService - listaItens');
    return this.httpClient.get<Produto[]> (API_URL);
  }
}
