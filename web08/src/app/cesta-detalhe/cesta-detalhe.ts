import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';
import { ItemCesta } from '../model/item-cesta';

@Component({
  selector: 'app-cesta-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta-detalhe.html',
  styleUrls: ['./cesta-detalhe.css']
})
export class CestaDetalheComponent {
  cesta: Cesta = new Cesta();

  removerItemDaCesta(item: ItemCesta) {
    this.cesta.removerItem(item);
  }
}