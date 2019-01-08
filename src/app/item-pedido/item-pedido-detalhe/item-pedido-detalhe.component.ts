import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-item-pedido-detalhe',
  templateUrl: './item-pedido-detalhe.component.html',
  styleUrls: ['./item-pedido-detalhe.component.css']
})
export class ItemPedidoDetalheComponent implements OnInit {

  @Input()
  produtos: Produto[];
  produtoSelecionado: Produto = new Produto();
  
  constructor() { 
  }

  ngOnInit() {
  }

  seleciona(item) {
    console.log('Produto selecioando '+ item);
    this.produtoSelecionado = item;
  }

  aumentaQuantidade() {
    this.produtoSelecionado.quantidade++;
    this.produtoSelecionado.valorTotal = 
      this.produtoSelecionado.quantidade * this.produtoSelecionado.valorUnitario;
  }

  diminuiQuantidade() {
    this.produtoSelecionado.quantidade--;
    this.produtoSelecionado.valorTotal = 
      this.produtoSelecionado.quantidade * this.produtoSelecionado.valorUnitario; 
  }

}
