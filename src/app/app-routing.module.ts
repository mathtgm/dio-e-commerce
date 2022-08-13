import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadProdutoComponent } from './pages/cad-produto/cad-produto.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent
  },
  {
    path: 'cadastro/produto/:id',
    component: CadProdutoComponent
  },
  {
    path: 'cadastro/produto',
    component: CadProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
