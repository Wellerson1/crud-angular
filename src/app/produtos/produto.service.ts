import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseProduto, ResponseProdutos } from './produto.model';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = "http://localhost:3333/produtos"
  constructor(private http: HttpClient) { }

  getProdutos(): Observable<ResponseProdutos>{
      return this.http.get<ResponseProdutos>(this.url)
  }

  //apenas um Produto
  getProduto(id: string): Observable<ResponseProduto>{
    //concatenando a url com id
    const _url = `${this.url}/${id}`

    return this.http.get<ResponseProduto>(_url)
}

  deleteProduto(id: string): Observable<any>{
    const _url = `${this.url}/${id}`
    
    return this.http.delete<any>(_url);
  }
}
