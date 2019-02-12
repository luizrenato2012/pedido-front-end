import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemPedidoService } from '../item-pedido.service';
import { ItemPedido } from '../item-pedido';
import { Produto } from '../produto';
import { templateJitUrl } from '@angular/compiler';
import { DomSanitizer } from '@angular/platform-browser';
import { RespostaTotaliza } from '../resposta-totaliza';

@Component({
	selector: 'app-item-pedido-lista',
	templateUrl: './item-pedido-lista.component.html',
	styleUrls: ['./item-pedido-lista.component.css']
})
export class ItemPedidoListaComponent implements OnInit {

	private produtos: Produto[];
	
	private valorTotal: number=9999;

	constructor(private itemPedidoService: ItemPedidoService,private sanitizer : DomSanitizer) {
		console.log (' crinado ItemPedidoListaComponent')
		this.produtos = [];
	}

	ngOnInit() {
		this.iniciaItens();
	}

	iniciaItens() {
		this.itemPedidoService.listaItens()
			.subscribe(resposta => {
				this.produtos = resposta.produtos;
				console.log('Valor Total ' + resposta.valorTotal);
				this.valorTotal = resposta.valorTotal;
				this.itemPedidoService.setProdutos(this.produtos);
				this.produtos.forEach(produto => 
					produto.imagemSafe = this.sanitizer
						.bypassSecurityTrustResourceUrl("data:image/png;base64, "	+ produto.imagem)
				);
			});
	}

	recebeValorTotal(valor: RespostaTotaliza) {
		console.log('recebendo valor '+ valor);
		this.valorTotal = valor.valorTotal;
	}

	gravaItens() {
		console.log('Gravando itens');
	}

}
