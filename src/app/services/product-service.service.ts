import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../enum/product.model';
import { ProductRepositoryService } from './product-repository.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsSubject = new BehaviorSubject<Product[]>([]);
  public products$ = this.productsSubject.asObservable();

  constructor(private repository: ProductRepositoryService) {
    this.loadProducts();
  }

  private loadProducts(): void {
    const products = this.repository.getProducts();
    of(products)
      .pipe(delay(500))
      .subscribe((prods) => this.productsSubject.next(prods));
  }

  addProduct(product: Product): void {
    this.repository.addProduct(product);
    this.loadProducts();
  }

  deleteProduct(product: Product): void {
    this.repository.deleteProduct(product.id);
    this.loadProducts();
  }
}
