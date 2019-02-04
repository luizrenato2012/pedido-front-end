import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/item-pedido/produto';
import { ItemPedidoService } from 'src/app/item-pedido/item-pedido.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-grupo-item-carrinho',
  templateUrl: './grupo-item-carrinho.component.html',
  styleUrls: ['./grupo-item-carrinho.component.css']
})
export class GrupoItemCarrinhoComponent implements OnInit {

  produtos: Produto[];

  valorTotal = 0.0;

  constructor(private itemPedidoService: ItemPedidoService,private sanitizer : DomSanitizer) {
    this.produtos = [];
    console.log ('criando GrupoItemCarrinhoComponent ');
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

}
