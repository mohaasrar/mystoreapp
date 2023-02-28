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
    let found = this.cartItemList
      .map(function (e) {
        return e.name;
      })
      .indexOf(product.name);
    if (found === -1) {
      this.cartItemList.push(product);
      alert(`${product.name} added to the cart!`);
    } else alert(`${product.name} already added!`);
  }

  removeFromCart(product: Product): Product[] {
    this.cartItemList = this.cartItemList.filter((p) => p.id !== product.id);
    alert(`${product.name} removed from the cart!`);
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
