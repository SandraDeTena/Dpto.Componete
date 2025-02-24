import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../services/product-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-add-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-add-component.component.html',
  styleUrl: './product-add-component.component.css',
})
export class ProductAddComponentComponent {
  productForm: FormGroup;
  

  constructor(private productService: ProductService) {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(0.01)]),
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value);
      this.productForm.reset();
    }
  }
}
