import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiURL = 'https://sheet.best/api/sheets/11dab358-5335-44d8-af5e-305ef4954ad5/tabs/productList';
  constructor(private httpClient: HttpClient) {}

  // Consulta a lista de produtos
  consultarProdutos(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL);
  }

  // Consulta um produto pela ID
  consultarProduto(idProduct: number): Observable<Product> {
    return this.httpClient.get<Product>(this.apiURL+`/${idProduct}`);
  }

  // Cadastra um produto
  cadastrarProduto(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiURL, product);
  }

  // Exclui produto pela ID
  excluirProduto(idProduct: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.apiURL+`/id/${idProduct}`);
  }

  // Atualiza as informações do produto
  atualizarProduto(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.apiURL+`/id/${product.id}`, product)
  }
  
}
