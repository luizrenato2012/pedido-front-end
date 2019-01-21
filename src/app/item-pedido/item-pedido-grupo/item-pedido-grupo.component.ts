import { Component, OnInit, EventEmitter } from '@angular/core';
import { ItemPedido } from '../item-pedido';
import { Produto } from '../produto';
import { RespostaItemTotaliza } from '../resposta-item-totaliza';
import { ItemPedidoService } from '../item-pedido.service';

@Component({
  selector: 'app-item-pedido-grupo',
  templateUrl: './item-pedido-grupo.component.html',
  styleUrls: ['./item-pedido-grupo.component.css']
})
export class ItemPedidoGrupoComponent implements OnInit {

  private resposta : RespostaItemTotaliza;

  private valorTotal = new EventEmitter();
  
  produtos: Produto[];

  item : Produto;
  itemSelecionado : Produto;
  
  constructor(private itemPedidoService : ItemPedidoService) { }

  ngOnInit() {
  }

  aumentaQuantidade() {
    this.item.quantidade++;
    this.item.valorTotal = 
    this.item.quantidade * this.item.valorUnitario;
  }

  diminuiQuantidade() {
    this.item.quantidade--;
    this.item.valorTotal = 
    this.item.quantidade * this.item.valorUnitario; 
  }

  adicionaItem(itens: Produto[]) {
		this.itemPedidoService.totalizaItens(itens) // alterar totalizaItens p/ aceitar ItemPedido[]
		.subscribe( respostaItem => {
      this.valorTotal.emit( respostaItem);
		  }
		);
	}

}
