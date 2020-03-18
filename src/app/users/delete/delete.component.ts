import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
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
              private route: ActivatedRoute) { }

  ngOnInit() {
     //capturando o id para a busca do usuario
    //id capturado está na rota
    this.id =this.route.snapshot.paramMap.get('id')

    //busca e atribui os dados na variavel user
    this.userService.getUser(this.id)
    .subscribe(res => {
        this.user = res.data;
      })
  }

}
