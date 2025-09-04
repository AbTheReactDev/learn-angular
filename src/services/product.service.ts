import { DUMMY_PRODUCTS } from './../data/products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = DUMMY_PRODUCTS;

  getProducts() {
    return this.products;
  }

  getProductById(id: string) {
    return this.products.filter((product) => product.id === id);
  }
}
