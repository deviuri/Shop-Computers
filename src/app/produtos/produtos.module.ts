import { NgModule } from '@angular/core';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { CommonModule } from '@angular/common';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesProdutoComponent
  ],
  imports: [
    ProdutosRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class ProdutosModule { }
