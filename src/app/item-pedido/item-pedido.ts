export class ItemPedido {
    
    id: number;
    idPedido:number;
	valorUnitario: number; 
	quantidade: number; 
    valorTotal: number;
	idProduto : number;
    numero: number;
    atual: boolean=false;
    
    constructor(idItem:number, idProduto: number, numero: number, valorUnitario: number,
        quantidade: number, valorTotal: number, atual:boolean) {
      this.id =idItem,
      this.idProduto = idProduto,
      this.numero= numero,
      this.valorUnitario=valorUnitario, 
      this.quantidade=quantidade, 
      this.valorTotal=valorTotal,
      this.atual = atual;
    }

}
