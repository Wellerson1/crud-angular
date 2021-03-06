import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from '../user.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: string;
  request: RequestUpdate;

  constructor(private userService: UserService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    //capturando o id para a busca do usuario
    //id capturado está na rota
    this.id =this.route.snapshot.paramMap.get('id')

    //busca e atribui os dados na variavel request
    this.userService.getUser(this.id)
    .subscribe(res => {
        this.request = {
          name: `${res.data.first_name} ${res.data.last_name}`,
          job: ''
        }
      })
  }
update(){
  this.userService.updateUser(this.id, this.request)
  .subscribe(res => {
    alert(`Atualizar: ${res.updatedAt}, Nome: ${res.name}, Job: ${res.job}`)});
}
}