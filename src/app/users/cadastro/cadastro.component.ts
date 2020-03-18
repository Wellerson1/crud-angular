import { Component, OnInit } from '@angular/core';
import { RequestCadastro, ResponseCadastro } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  request: RequestCadastro = {
    name: '',
    job: ''
  }

  response: ResponseCadastro;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
salvar(){
  this.userService.createUser(this.request)
  .subscribe(res => this.response = res)
}
}
