import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
