import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartlistService } from 'src/app/services/cartlist.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css'],
})
export class AddtocartComponent {
  @Input() product: Product;
  selectedqty = 0;
  stockbalance: number[] = [];

  constructor(private cartlistService: CartlistService) {
    this.product = {
      name: '',
      price: 0,
      url: '',
      description: '',
      stockbalance: 0,
      selectedqty: 0,
    };
  }

  ngOnInit(): void {
    this.stockbalance = [...Array(this.product.stockbalance).keys()].map(
      (i) => i + 1
    );
  }

  ngDoCheck(): void {
    if (this.stockbalance.length !== this.product.stockbalance) {
      this.stockbalance = [...Array(this.product.stockbalance).keys()].map(
        (i) => i + 1
      );
    }
  }

  addToCart(product: Product): void {
    this.product.selectedqty = this.selectedqty;
    this.cartlistService.addToCart(product);
  }
}
