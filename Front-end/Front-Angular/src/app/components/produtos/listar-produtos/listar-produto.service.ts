import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseProdutos } from './listar-produtos.model';

@Injectable({
  providedIn: 'root',
})
export class ListarProdutoService {
  private url = 'http://localhost:8080/Casa7MVC/ProdutoController';

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<ResponseProdutos> {
    return this.http.get<ResponseProdutos>(this.url);
  }
}
