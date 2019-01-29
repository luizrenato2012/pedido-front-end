import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ItemPedido } from '../item-pedido';
import { Produto } from '../produto';
import { RespostaItemTotaliza } from '../resposta-item-totaliza';
import { ItemPedidoService } from '../item-pedido.service';
import { resetApplicationState } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-item-pedido-grupo',
  templateUrl: './item-pedido-grupo.component.html',
  styleUrls: ['./item-pedido-grupo.component.css']
})
export class ItemPedidoGrupoComponent implements OnInit {

  private resposta : RespostaItemTotaliza;

  @Output()
  private valorTotal = new EventEmitter();
  
  @Input()
  produtos: Produto[];

  item  = new Produto();
  itemSelecionado = new Produto();
  
  constructor(private itemPedidoService : ItemPedidoService) {
    console.log('criando itemPedidoGrupo');
   }


  ngOnInit() {
  }

  aumentaQuantidade() {
    console.log(`aumentando item JSON.stringfy(${this.itemSelecionado})`);
    this.itemSelecionado.quantidade++;
    this.itemSelecionado.valorTotal = this.itemSelecionado.valorUnitario * this.itemSelecionado.quantidade;
 //   this.item.quantidade * this.item.valorUnitario;
  }

  diminuiQuantidade() {
    console.log('diminuindo quantidade');
    this.itemSelecionado.quantidade = this.itemSelecionado.quantidade==0 ? 0 :
       --this.itemSelecionado.quantidade;
    this.itemSelecionado.valorTotal = this.itemSelecionado.valorUnitario * this.itemSelecionado.quantidade;
    //this.item.quantidade * this.item.valorUnitario; 
  }

  adicionaItem() {
    this.itemSelecionado.atual=true;
		this.itemPedidoService.totalizaItens(this.produtos) // alterar totalizaItens p/ aceitar ItemPedido[]
		  .subscribe( respostaItem => {
          console.log('enviando valor total ' + JSON.stringify(respostaItem));
          this.itemSelecionado.valorTotal = respostaItem.valorTotalItem;
          this.valorTotal.emit( respostaItem);
		  }
		);
  }
  
  seleciona(item: Produto) {
    console.log(`selecionando item JSON.stringfy(${item})`);
    this.itemSelecionado = item;
  }

}
