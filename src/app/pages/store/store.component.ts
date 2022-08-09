import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  listaProduto: Product[] = [];

  constructor(private productService: ProductsService, private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.productService.consultarProdutos().subscribe(resultado => {
      this.listaProduto = resultado;
    })
  }

  //Adicionar um produto no carrinho
  adicionarCarrinho(produto: Product): void {

    this.carrinhoService.adicionarProduto(produto);
    
  }
}
