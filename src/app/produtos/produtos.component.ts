import { Component, OnInit } from '@angular/core';
import { Produto, ResponseProduto, ResponseProdutos } from './produto.model';
import { ProdutoService } from './produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  id:string;
  responseProduto: ResponseProdutos;
  produto: Produto;


  constructor(private produtoService: ProdutoService,
              private route: ActivatedRoute) { }

  ngOnInit() {
   //capturando o id para a busca do usuario
    //id capturado está na rota
    this.id = this.route.snapshot.paramMap.get('id')

    //busca e atribui os dados na variavel produto
    this.produtoService.getProduto(this.id)
    .subscribe(res => {
        this.produto = res.data;
      })

    this.produtoService.getProdutos()
    .subscribe(res => this.responseProduto = res)

    
  }

  delete(){
    this.produtoService.deleteProduto(this.id).subscribe(res =>
      alert("Removido com sucesso!"))
  }
  
}
