import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  produtos: IProduto[] | undefined;

  constructor(
    private produtoService: ProdutosService,
    private router: ActivatedRoute
    ){

  }

  ngOnInit(){
    this.produtos = this.produtoService.getAll();
  }
}
