import { Component, OnInit } from '@angular/core';
import { ResponseProduto } from './produto.model';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  responseProduto: ResponseProduto;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.getProdutos()
    .subscribe(res => this.responseProduto = res)

  }

  
}
