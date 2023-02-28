import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartlistService } from 'src/app/services/cartlist.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItemList: Product[] = [];
  totalPrice = 0;
  @Input() productItem: Product;
  selectedqty = 0;
  stockbalance: number[] = [];

  constructor(private cartlistService: CartlistService) {
    this.productItem = {
      name: '',
      price: 0,
      url: '',
      description: '',
      stockbalance: 0,
      selectedqty: 0,
    };
  }

  ngOnInit(): void {
    this.cartItemList = this.cartlistService.getCart();
    this.totalPrice = this.cartlistService.getTotalPrice();
  }

  removeItem(product: Product): void {
    this.cartItemList = this.cartlistService.removeFromCart(product);
    this.totalPrice = this.cartlistService.getTotalPrice();
  }
  addToCart(productItem: Product): void {
    this.productItem.selectedqty = this.selectedqty;
    this.cartlistService.addToCart(productItem);
    alert(
      `${this.productItem.name} added to the cart!\nAmount: ${this.selectedqty}`
    );
  }
}
