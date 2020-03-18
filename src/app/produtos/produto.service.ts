import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseProduto } from './produto.model';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = "http://localhost:3333/produtos"
  constructor(private http: HttpClient) { }

  getProdutos(): Observable<ResponseProduto>{
      return this.http.get<ResponseProduto>(this.url)
  }
}
