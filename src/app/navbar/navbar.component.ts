import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  qtdProdutoCarrinho: number = 0;

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.qtdProdutoCarrinho = this.carrinhoService.getQuantidadeCarrinho();
  }



}
