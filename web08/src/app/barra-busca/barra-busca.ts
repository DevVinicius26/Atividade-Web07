import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-busca',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './barra-busca.html',
  styleUrls: ['./barra-busca.css']
})
export class BarraBuscaComponent {
  termoBusca: string = '';

  pesquisar() {
    // Grava o conteúdo digitado na barra de busca no local Storage conforme pedido
    localStorage.setItem('termoBusca', this.termoBusca);
    console.log('Termo gravado no localStorage:', this.termoBusca);
  }
}