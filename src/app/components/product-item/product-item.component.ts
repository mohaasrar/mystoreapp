import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  path: string;
  constructor(private router: Router) {
    this.product = {
      name: '',
      price: 0,
      url: '',
      description: '',
      stockbalance: 0,
    };
    this.path = router.url;
  }

  ngOnInit(): void {
    //console.log(this.productItem.name);
  }
}
