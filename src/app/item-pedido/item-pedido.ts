export class ItemPedido {
    
    id: number;
    idPedido:number;
	valorUnitario: number; 
	quantidade: number; 
    valorTotal: number;
	idProduto : number;
	numero: number;
    
    constructor(idItem:number, idProduto: number, numero: number, valorUnitario: number,
        quantidade: number, valorTotal: number) {
      this.id =idItem,
      this.idProduto = idProduto,
      numero= numero,
      valorUnitario=valorUnitario, 
      quantidade=quantidade, 
      valorTotal=valorTotal    
    }

}
