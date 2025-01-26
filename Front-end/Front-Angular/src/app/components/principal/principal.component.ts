import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  standalone: false,

  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {
  name: string = 'Rafael';
}
