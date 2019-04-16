import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { OverviewComponent } from './overview.component';
import { MatIconModule, MatButtonModule } from '@angular/material';

const routes: Routes = [
  { path: '', component: OverviewComponent }
];

@NgModule({
  declarations: [CardComponent, OverviewComponent],
  imports: [
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule
  ]
})
export class OverviewModule {}
