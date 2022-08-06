import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  listaProduto: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.productService.consultarProdutos().subscribe(resultado => {
      this.listaProduto = resultado;
    })
  }

}
