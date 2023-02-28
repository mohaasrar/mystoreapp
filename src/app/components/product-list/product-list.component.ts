import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductlistService } from 'src/app/services/productlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productlistService: ProductlistService) {}

  ngOnInit(): void {
    this.productlistService.getProducts().subscribe((data) => {
      return (this.products = data.map((product) => {
        return { ...product, qty: 0 };
      }));
    });
  }
}
