import { Injectable } from '@angular/core';
import { ICarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: ICarrinho[] = [];

  constructor() { }

  adicionarAoCarrinho(produto: ICarrinho){
    this.itens.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  obtemCarrinho(){
   this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
   return this.itens;
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
}
