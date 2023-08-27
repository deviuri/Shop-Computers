import { Component, Injectable } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { ICarrinho } from '../produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

export class CarrinhoComponent {
  itensCarrinho: ICarrinho[] = [];

  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
    ){

  }

  ngOnInit(){
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcTotal();
  }

  calcTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
    return this.total;
  }

  removerProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcTotal();
  }

  comprar(){
    alert('Parabens você finalizou sua compra!')
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['produtos']);
  }
}
