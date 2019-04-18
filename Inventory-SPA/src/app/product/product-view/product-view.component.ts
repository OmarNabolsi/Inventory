import { Component, OnInit } from '@angular/core';
import { ProductData } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  product: ProductData;

  constructor() { }

  ngOnInit() {
    this.product = {
      id: '1',
      name: 'Product Name',
      cost: '123455',
      salesPrice: '23546',
      productCategory: 'category',
      productType: 'type',
      onHand: '112',
      forecasted: '150'
    };
  }

}
