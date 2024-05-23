import { Injectable } from '@angular/core';
import { PRODUCTS } from '../../mock-data';
import { Product } from '../components/types/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  products$ = new BehaviorSubject<Product[]>(PRODUCTS);
  cartProducts$ = new BehaviorSubject<Product[]>([]);

  addToCart(productId: string) {
    const product = this.products$.value.find((prod) => prod.id === productId);

    if (product) {
      const updatedCart = [...this.cartProducts$.value];
      if (updatedCart.includes(product)) {
        alert('ეს პროდუქტი უკვე დამატებული გაქვთ');
      } else {
        updatedCart.push(product);
      }
      this.cartProducts$.next(updatedCart);
    }
  }

  deleteProdFromCart(productId: string) {
    const updatedProducts = this.cartProducts$.value.filter(
      (prod) => prod.id !== productId
    );
    this.cartProducts$.next(updatedProducts);
  }
}
