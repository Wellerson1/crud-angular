import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import { CadastroComponent } from './users/cadastro/cadastro.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { UpdateComponent } from './users/update/update.component';
import { DeleteComponent } from './users/delete/delete.component';

export const routes: Routes = [
    {path: 'produtos', component: ProdutosComponent},
    {path: 'users', component: UsersComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'users/delete/:id', component: DeleteComponent},
    {path: 'users/update/:id', component: UpdateComponent}
];


