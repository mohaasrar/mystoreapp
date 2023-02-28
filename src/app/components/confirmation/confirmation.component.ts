import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartlistService } from 'src/app/services/cartlist.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  fullName = '';
  address = '';
  cartList: Product[] = [];
  totalPrice = 0;

  constructor(
    private route: ActivatedRoute,
    private cartlistService: CartlistService
  ) {}

  ngOnInit(): void {
    this.fullName = this.route.snapshot.paramMap.get('fullName') as string;
    this.address = this.route.snapshot.paramMap.get('address') as string;
    this.totalPrice = this.cartlistService.getTotalPrice();
    this.cartlistService.clearCart();
  }
}
