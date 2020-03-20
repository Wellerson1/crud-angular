import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestUpdate, User } from '../user.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: string;
  user: User;

  constructor(private userService: UserService, 
              private route: ActivatedRoute,
              private _route: Router) { }

  ngOnInit() {
     //capturando o id para a busca do usuario
    //id capturado está na rota
    this.id = this.route.snapshot.paramMap.get('id')

    //busca e atribui os dados na variavel user
    this.userService.getUser(this.id)
    .subscribe(res => {
        this.user = res.data;
      })
  }

  delete(){
    this.userService.deleteUser(this.id)
    .subscribe(res => alert("Removido!"))

    this._route.navigate(['/users'])
  }

  cancel(){
    this._route.navigate(['/users'])
  }

}
