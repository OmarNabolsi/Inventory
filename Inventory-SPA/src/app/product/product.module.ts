import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';

const routes: Routes = [
  { path: '', component: ProductComponent }
];

@NgModule({
  declarations: [ProductComponent],
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class ProductModule { }
