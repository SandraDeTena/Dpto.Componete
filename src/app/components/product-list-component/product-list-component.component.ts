import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Product } from '../../enum/product.model';
import { ProductService } from '../../services/product-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})
export class ProductListComponentComponent implements OnInit{
  filteredProducts$!: Observable<Product[]>;
  filterControl = new FormControl('');

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.filteredProducts$ = combineLatest([
      this.productService.products$,
      this.filterControl.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([products, filterValue]) => {
        const price = parseFloat(filterValue ?? '') || 0;
        return products.filter(p => p.price > price);
      })
    );
  }

  editProduct(product: Product): void {
    console.log("Editar:", product);
  }

  deleteProduct(product: Product): void {
    if (confirm(`¿Quieres borrar el producto ${product.name} de la lista?`)) {
      this.productService.deleteProduct(product);
    }
  }
}
