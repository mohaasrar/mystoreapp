import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartlistService } from 'src/app/services/cartlist.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() cartItem: Product;
  @Output() removeItem: EventEmitter<Product> = new EventEmitter();

  selectedqty = 0;
  stockbalance: number[] = [];
  constructor(private cartlistService: CartlistService) {
    this.cartItem = {
      name: '',
      price: 0,
      url: '',
      description: '',
      stockbalance: 0,
      selectedqty: 0,
    };
  }

  ngOnInit(): void {}

  removeFromCart(cartItem: Product): void {
    this.removeItem.emit(cartItem);
  }

  addToCart(productItem: Product): void {
    this.cartItem.selectedqty = this.selectedqty;
    this.cartlistService.addToCart(productItem);
    alert(
      `${this.cartItem.name} added to the cart!\nAmount: ${this.selectedqty}`
    );
  }
}
