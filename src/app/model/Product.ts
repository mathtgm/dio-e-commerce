export class Product {
    id: number;
    produto: String;
    valor: number;
    quantidade: number;
    imagem: String;
    descricao: String;
    categoria: String;

    constructor(id: number, produto: String, quantidade: number, imagem: String, descricao: String, categoria: String, valor: number){
        this.id = id;
        this.produto = produto;
        this.quantidade = quantidade;
        this.imagem = imagem;
        this.descricao = descricao;
        this.categoria = categoria;
        this.valor = valor;
    }
}