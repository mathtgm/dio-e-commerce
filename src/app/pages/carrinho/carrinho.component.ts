import { Component, OnInit } from '@angular/core';
import { ProductCarrinho } from 'src/app/model/ProductCarrinho';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  
  carrinho: ProductCarrinho[] = [];

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    if(localStorage.getItem('tarefas') !== null){
       this.carrinho = JSON.parse(localStorage.getItem('carrinho')!);
    }  
  }

  totalCarrinho(): number {
    let total: number = 0

    this.carrinho.forEach((obj) => {
      total += obj.mercadoria.valor * obj.quantidade;
    });

    return total;
  }

  removerUmProduto(idProduto: number): void {
    this.carrinhoService.removerProduto(idProduto);
  }

  
  removerProduto(idProduto: number): void {
    this.carrinhoService.removerProdutoCarrinho(idProduto);
  }

}
