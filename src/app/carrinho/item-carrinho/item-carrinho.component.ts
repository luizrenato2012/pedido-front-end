import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/item-pedido/produto';

@Component({
  selector: 'app-item-carrinho',
  templateUrl: './item-carrinho.component.html',
  styleUrls: ['./item-carrinho.component.css']
})
export class ItemCarrinhoComponent implements OnInit {

  constructor() { 
    this.produtos = [];
    this.itemSelecionado = new Produto();
  }
  
  @Input()
  produtos : Produto[];
  itemSelecionado : Produto;
  
  ngOnInit() {
  }

  seleciona(item: Produto) {
    console.log('Item selecionado '+ item);
    this.itemSelecionado = item;
  }

  aumentaQuantidade() {
    this.itemSelecionado.quantidade++;
    this.itemSelecionado.valorTotal = this.itemSelecionado.valorUnitario * this.itemSelecionado.quantidade;
  }

  diminuiQuantidade() {
    this.itemSelecionado.quantidade = this.itemSelecionado.quantidade==0 ? 0 :
       --this.itemSelecionado.quantidade;
    this.itemSelecionado.valorTotal = this.itemSelecionado.valorUnitario * this.itemSelecionado.quantidade;
  }

}
