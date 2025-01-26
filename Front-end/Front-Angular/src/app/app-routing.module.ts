import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produtos/listar-produtos', component: ListarProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
