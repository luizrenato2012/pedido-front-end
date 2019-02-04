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

}
