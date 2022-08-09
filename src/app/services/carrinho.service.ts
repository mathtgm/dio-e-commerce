import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { ProductCarrinho } from '../model/ProductCarrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  carrinho: ProductCarrinho[] = [];

  constructor() { }

  // Adiciona um produto no carrinho
  adicionarProduto(produto: Product): void {
    this.carrinho = this.getCarrinho();

    for(let index = 0; this.carrinho.length < index; index++) {

      // Caso o produto ja esta no carrinho ele adiciona mais 1 na quantidade
      if(this.carrinho[index].mercadoria.id === produto.id) {
        this.carrinho[index].quantidade =+ 1;
      }
    }

    this.setCarrinho(this.carrinho);
  }

  // Remove 1 produto do carrinho
  removerProduto(idProduto: Number): void {
    this.carrinho = this.getCarrinho();

    for(let index = 0; this.carrinho.length < index; index++) {
      if(this.carrinho[index].mercadoria.id === idProduto) {

        // Caso so tenha 1 produto no carrinho, ele será removido
        if(this.carrinho[index].quantidade === 1) {
          this.removerProdutoCarrinho(idProduto);
        } else {
          this.carrinho[index].quantidade =- 1;
        }
        
      }
    }

    this.setCarrinho(this.carrinho);
  }

  // Remove o produto do carrinho
  removerProdutoCarrinho(idProduto: Number): void {
    this.carrinho = this.getCarrinho();

    for(let index = 0; this.carrinho.length < index; index++) {
      if(this.carrinho[index].mercadoria.id === idProduto) {
        this.carrinho.splice(index, 1);
      }
    }

    this.setCarrinho(this.carrinho);
  }

  getCarrinho(): ProductCarrinho[] {
    if(localStorage.getItem('carrinho') !== null) {
      return JSON.parse(localStorage.getItem('carrinho')!);
    }

    return [];
    
  }

  setCarrinho(carrinho: ProductCarrinho[]): void {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }

  // Retorna a quantidade de produtos no carrinho
  getQuantidadeCarrinho(): number {
    return this.getCarrinho.length;
  }
}
