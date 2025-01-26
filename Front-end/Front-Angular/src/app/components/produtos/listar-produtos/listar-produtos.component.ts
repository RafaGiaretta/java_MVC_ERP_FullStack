import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseProdutos } from './listar-produtos.model';
import { ListarProdutoService } from './listar-produto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listar-produtos',
  standalone: false,

  templateUrl: './listar-produtos.component.html',
  styleUrl: './listar-produtos.component.css',
})
export class ListarProdutosComponent {
  reponseProdutos?: ResponseProdutos;

  constructor(
    private produtoService: ListarProdutoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.produtoService
      .getProdutos()
      .subscribe((res) => (this.reponseProdutos = res));
  }

  goBack(): void {
    this.location.back();
  }
}
