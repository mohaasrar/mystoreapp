import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartlistService {
  cartItemList: Product[] = [];

  constructor() {}

  getCart(): Product[] {
    return this.cartItemList;
  }

  addToCart(product: Product): void {
    this.cartItemList.push(product);
  }

  removeFromCart(product: Product): Product[] {
    this.cartItemList = this.cartItemList.filter((p) => p.id !== product.id);
    return this.cartItemList;
  }

  clearCart(): Product[] {
    this.cartItemList = [];
    return this.cartItemList;
  }

  getTotalPrice(): number {
    return this.cartItemList.reduce((a, val) => {
      return a + val.price * Number(val.selectedqty);
    }, 0);
  }
}
