import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { routes } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './users/cadastro/cadastro.component';
import { FormsModule} from '@angular/forms';
import { ProdutosComponent } from './produtos/produtos.component';
import { UpdateComponent } from './users/update/update.component';
import { DeleteComponent } from './users/delete/delete.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CadastroComponent,
    ProdutosComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
