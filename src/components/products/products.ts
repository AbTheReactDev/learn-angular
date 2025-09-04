import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-products',
  imports: [NgOptimizedImage],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productService = inject(ProductService);

  products = this.productService.getProducts();
}
