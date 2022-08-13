import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrls: ['./cad-produto.component.css']
})
export class CadProdutoComponent implements OnInit{

  formMsg: any = {
    tipo: -1,
    msg: ''
  }

  produtoForm: FormGroup;
  produto: Product[] = [];
  idProduto: number = -1;

  constructor(private formBuilder: FormBuilder, private produtoServico: ProductsService, private actRouter: ActivatedRoute) {
    this.produtoForm = this.formBuilder.group({
      id: 0,
      produto: '',
      valor: 0.00,
      descricao: '',
      imagem: '',
      categoria: ''
    });
  }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(params => {
      this.idProduto = Number(params.get('id'));
      if(this.idProduto !== -1) {
        this.produtoServico.consultarProduto(this.idProduto).subscribe(result => {
          this.produtoForm.patchValue({
            id: result.id,
            produto: result.produto,
            valor: result.valor,
            imagem: result.imagem,
            categoria: result.categoria,
            descricao: result.descricao
          });
        });
      }
    })
    this.produtoServico.consultarProdutos().subscribe(result => {
      this.produto = result;
    });
  }

  atualizarProduto(): void {
    this.produtoServico.atualizarProduto(this.produtoForm.value).subscribe(result => {
      this.sucesso('Produto atualizado com sucesso');
    }, err => {
      this.falha(`Erro ao cadastrar produto: ${err.error.detail} Cod. ${err.status}`);
    });
  }

  criarProduto(): void {
    this.produtoForm.get('id')?.patchValue(this.produto.length + 1);
    this.produtoServico.cadastrarProduto(this.produtoForm.value).subscribe(result => {
      this.sucesso('Produto cadastrado com sucesso');
    }, err => {
      this.falha(`Erro ao cadastrar produto: ${err.error.detail} Cod. ${err.status}`);
    });
  }

  actionButton(): void {
    if(this.idProduto > 0) {
      this.atualizarProduto();
    } else {
      this.criarProduto();
    }
  }

  excluirProduto(): void  {
    this.produtoServico.excluirProduto(this.idProduto).subscribe(result => {
      this.sucesso('Produto excluido com sucesso');
    }, err => {
      this.falha(`Erro ao cadastrar produto: ${err.error.detail} Cod. ${err.status}`);
    });
  }

  sucesso(msg: string): void {
    this.formMsg['tipo'] = 1;
    this.formMsg['msg'] = msg;
  }

  falha(msg: string): void {
    this.formMsg['tipo'] = 2;
    this.formMsg['msg'] = msg;
  }
}
