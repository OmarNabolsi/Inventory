import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatSortModule, MatInputModule, MatPaginatorModule, MatCheckboxModule, MatTabsModule, MatListModule, MatGridListModule } from '@angular/material';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'view', component: ProductViewComponent },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    MatListModule,
    MatGridListModule,
  ]
})
export class ProductModule { }
