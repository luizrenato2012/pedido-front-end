import { Component, OnInit } from '@angular/core';
import { ItemPedidoService } from '../item-pedido.service';
import { ItemPedido } from '../item-pedido';
import { Produto } from '../produto';
import { templateJitUrl } from '@angular/compiler';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-item-pedido-lista',
	templateUrl: './item-pedido-lista.component.html',
	styleUrls: ['./item-pedido-lista.component.css']
})
export class ItemPedidoListaComponent implements OnInit {

	private itemSelecionado: ItemPedido;
	private produtos: Produto[];

	constructor(private itemPedidoService: ItemPedidoService,private sanitizer : DomSanitizer) {
		//console.log('criando ItemPedidoComponent');
		this.produtos = [];
	}

	ngOnInit() {
		this.iniciaItens();
	}

	iniciaItens() {
		//console.log('Iniciando itens');
		this.itemPedidoService.listaItens()
			.subscribe(produtos => {
				this.produtos = produtos;
				this.produtos.forEach(produto => 
					produto.imagemSafe = this.sanitizer
						.bypassSecurityTrustResourceUrl("data:image/png;base64, "	+ produto.imagem)
					//produto.imagemSafe = "data:image/png;base64, " +produto.imagem
				);
				//this.template(this.produtos);
			});
	}

	template(produtos: Produto[]) {
		let content =
			`<div class="list-group">
				${produtos.map(item =>
				`<a href="#" class="list-group-item comando"  data-toggle="modal" data-target="#myModal" (click)="seleciona(${item.idProduto})">
			<input type="hidden" name="id_item" value="${item.idItem}"/>
					<table>
						<tbody>
							<tr>
								<td rowspan="3"><img src="data:image/png;base64, ${item.imagem}" alt="sem imagem"	width=50 height=40></td>
								<td><font size=2> ${item.nome} </font></td>
							</tr>
							<tr>
								<td><font size=1> ${item.descricao} </font></td>
							</tr>
							<tr>
								<td><font size=1 color="red"> ${item.valorUnitario} </font></td>
							</tr>
						</tbody>
					</table>
				</a> 
				
				`).join('')}
				</div>`;
		let divTable = document.querySelector('#table_produtos');
		divTable.innerHTML = content;
	}

	seleciona(id: number) {
		console.log('selecionado ' + id);
	}

}
