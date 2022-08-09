import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductCarrinho } from 'src/app/model/ProductCarrinho';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  
  carrinho: ProductCarrinho[] = [
    {
      mercadoria: {
        id: 1,
        categoria: 'Movel',
        descricao: 'Descrição SImples',
        imagem: 'https://a-static.mlcdn.com.br/800x560/guarda-roupa-casal-espelho-6-portas-2-gavetas-real-atualle/multiloja/24530/f87bbec27a36b8cb027dcd5f6e086594.jpg',
        produto: 'Celular mó bom',
        valor: 100.55,
      },
      quantidade: 10,
      valorTotal: 0
    },
    {
      mercadoria: {
        id: 1,
        categoria: 'Movel',
        descricao: 'Descrição SImples',
        imagem: 'https://a-static.mlcdn.com.br/800x560/guarda-roupa-casal-espelho-6-portas-2-gavetas-real-atualle/multiloja/24530/f87bbec27a36b8cb027dcd5f6e086594.jpg',
        produto: 'Celular mó bom',
        valor: 100.55,
      },
      quantidade: 10,
      valorTotal: 0
    }
  ];

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    // if(localStorage.getItem('tarefas') !== null){
    //   this.carrinho = JSON.parse(localStorage.getItem('carrinho')!);
    // }  
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
