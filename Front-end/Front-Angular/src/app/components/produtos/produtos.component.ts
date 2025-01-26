import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-produtos',
  standalone: false,

  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
