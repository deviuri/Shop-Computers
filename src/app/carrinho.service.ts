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
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  obtemCarrinho(){
   return JSON.parse(localStorage.getItem("carrinho") || "");
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }
}
