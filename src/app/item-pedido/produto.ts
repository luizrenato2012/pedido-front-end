import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ItemPedido } from "./item-pedido";

export class Produto {

    descricao='';
    nome="";
    imagem=	"";
    quantidade=	0;
    valorUnitario=0.0;
    idProduto=0;
    valorTotal=0.0;
    idPedido=0;
    numero=0;
    idItem=0;
    imagemSafe : SafeResourceUrl;
    atual: boolean=false;

     constructor() { }
      
      converteItemPedido() {
        return new ItemPedido(this.idItem, this.idProduto, this.numero, 
            this.valorUnitario, this.quantidade, this.valorTotal, this.atual);
      }
}