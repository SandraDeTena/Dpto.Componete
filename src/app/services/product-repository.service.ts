import { Injectable } from '@angular/core';
import { Product } from '../enum/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {

  constructor() { }

  private products: Product[] = [
    { id: 1, name: 'Producto A', price: 10 },
    { id: 2, name: 'Producto B', price: 20 },
    { id: 3, name: 'Producto C', price: 30 },
  ];

  getProducts(): Product[] {
    return [...this.products];
  }

  addProduct(product: Product): void {
    product.id = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
    this.products.push(product);
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}
