import { Product } from "./Product"

export class ProductCarrinho {

    mercadoria: Product;
    quantidade: number;
    valorTotal: number;

    constructor(produto: Product, quantidade: number) {
        this.mercadoria = produto;
        this.quantidade = quantidade;
        this.valorTotal = quantidade * produto.valor;
    }
}