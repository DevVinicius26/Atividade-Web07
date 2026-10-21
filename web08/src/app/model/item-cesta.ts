import { Produto } from './produto';

export class ItemCesta {
  produto!: Produto;
  quantidade!: number;
  valorTotalItem!: number;
}