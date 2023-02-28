import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  fullName = '';
  address = '';
  cardNumber = '';
  fullNameError: boolean = false;
  addressError: boolean = false;
  carNumberError: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.router.navigate([
      'confirmation',
      { fullName: this.fullName, address: this.address },
    ]);
  }

  validateFullName() {
    if (!this.fullName || this.fullName.length < 3) {
      this.fullNameError = true;
    } else {
      this.fullNameError = false;
    }
  }

  validateCardNumber() {
    if (!this.cardNumber || this.cardNumber.length < 16) {
      this.carNumberError = true;
    } else {
      this.carNumberError = false;
    }
  }

  validateAddress() {
    if (!this.address || this.address.length < 6) {
      this.addressError = true;
    } else {
      this.addressError = false;
    }
  }
}
