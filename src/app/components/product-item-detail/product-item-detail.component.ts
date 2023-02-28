import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductlistService } from 'src/app/services/productlist.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent {
  id = 0;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productlistService: ProductlistService
  ) {
    this.product = {
      name: '',
      price: 0,
      url: '',
      description: '',
      stockbalance: 0,
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => (this.id = parseInt(data.id, 10)));
    this.productlistService.getProducts().subscribe((data) => {
      this.product = data.find((p) => p.id === this.id) as unknown as Product;
    });
  }
}
