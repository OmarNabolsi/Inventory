import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

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
  selection = new SelectionModel<ProductData>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const products = Array.from({length: 100}, (_, k) => this.creatNewProduct(k + 1));

    this.dataSource = new MatTableDataSource(products);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator.hidePageSize = true;
    this.paginator.pageSize = 15;
  }

  creatNewProduct(id: number): ProductData {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
    const cat = CATEGORIES[Math.round(Math.random() * (CATEGORIES.length - 1))];
    const type = TYPES[Math.round(Math.random() * (TYPES.length - 1))];
    const price = Math.round(Math.random() * 100000).toString();
    const cost = Math.round(+price * 0.86).toString();
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onItemClick(row: ProductData) {
    console.log(row);
  }

}
