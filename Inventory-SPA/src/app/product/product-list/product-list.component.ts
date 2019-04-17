import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

export interface ProductData {
  id: string;
  name: string;
  salesPrice: string;
  cost: string;
  productCategory: string;
  productType: string;
  onHand: string;
  forecasted: string;
}

const NAMES: string[] = ['Screen', 'Laptop', 'Stapler', 'Pen', 'Cup', 'Bag', 'Phone', 'Mouse', 'Keyboard', 'Watch', 'Tissue'];
const TYPES: string[] = ['Storable Product', 'Consumable', 'Service'];
const CATEGORIES: string[] = ['Office Appl.', 'Electronic', 'Personal'];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'salesPrice', 'cost', 'productCategory', 'productType', 'onHand', 'forecasted'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const products = Array.from({length: 10}, (_, k) => this.creatNewProduct(k + 1));

    this.dataSource = new MatTableDataSource(products);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  creatNewProduct(id: number): ProductData {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
    const cat = CATEGORIES[Math.round(Math.random() * (CATEGORIES.length - 1))];
    const type = TYPES[Math.round(Math.random() * (TYPES.length - 1))];
    const price = Math.round(Math.random() * 100000).toString();
    const cost = Math.round((Math.random() * 100000) * 0.86).toString();
    const onHand = Math.round(Math.random() * 1000).toString();
    const forecasted = Math.round((Math.random() * 1000) * 0.5).toString();

    const product: ProductData = {
      id: id.toString(),
      name,
      salesPrice: price,
      cost,
      productCategory: cat,
      productType: type,
      onHand,
      forecasted
    };
    return product;
  }

}
