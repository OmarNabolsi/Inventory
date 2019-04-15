import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatTooltipModule
  ]
})
export class AppMatModule {}
