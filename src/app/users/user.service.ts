import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseUser, RequestCadastro, ResponseCadastro, ResponseUsers, RequestUpdate, ResponseUpdate } from './user.model'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://reqres.in/api/users"
  constructor(private http: HttpClient) { }

//pegando todos os usuarios
  getUsers(): Observable<ResponseUsers>{
      return this.http.get<ResponseUsers>(this.url)
  }

//apenas um usuario
  getUser(id: string): Observable<ResponseUser>{
    //concatenando a url com id
    const _url = `${this.url}/${id}`

    return this.http.get<ResponseUser>(_url)
}

  createUser(request: RequestCadastro): Observable<ResponseCadastro>{
    return this.http.post<ResponseCadastro>(this.url, request)
  }

//passa o id e o corpo com os dados atualizados
  updateUser(id: string, request: RequestUpdate): Observable<ResponseUpdate>{
    const _url = `${this.url}/${id}`
    
    return this.http.put<ResponseUpdate>(this.url, request)
  }

  deleteUser(id: string): Observable<any>{
    const _url = `${this.url}/${id}`
    
    return this.http.delete<any>(_url);
  }

}
