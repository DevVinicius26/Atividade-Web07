import { ItemCesta } from './item-cesta';

export class Cesta {
  itens: ItemCesta[] = [];
  valorTotal: number = 0;

  removerItem(item: ItemCesta): void {
    const index = this.itens.indexOf(item);
    if (index > -1) {
      this.itens.splice(index, 1);
      this.calcularValorTotal();
    }
  }

  calcularValorTotal(): void {
    this.valorTotal = this.itens.reduce((total, item) => total + (item.valorTotalItem || 0), 0);
  }
}