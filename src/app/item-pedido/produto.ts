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


    constructor(descricao='',nome="",
         imagem=	"",  quantidade=	0,
         valorUnitario=0.0, idProduto=0,
         valorTotal=0.0, idPedido=0,
         numero=0,  idItem=0) {
        this.descricao= descricao;
        this.nome=nome;
        this.imagem=	imagem;
        this.quantidade=	quantidade;
        this.valorUnitario=valorUnitario;
        this.idProduto=idProduto;
        this.valorTotal=valorTotal;
        this.idPedido=idPedido;
        this.numero=numero;
        this.idItem=idItem;
          }

         
}