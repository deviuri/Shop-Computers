import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificao.service';
import { ICarrinho, IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent {
  produto: IProduto | undefined;
  estoque = 1;

  constructor(
    private produtosService: ProdutosService,
     private route: ActivatedRoute,
     private notificacao: NotificacaoService,
     private carrinhoService: CarrinhoService
     ){

  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAoCarrinho(){
    this.notificacao.notificar("O produto foi adicionado ao carrinho");
    const produto: ICarrinho = {
      ...this.produto!,
      estoque: this.estoque
    }
    this.carrinhoService.adicionarAoCarrinho(produto);
  }

}
