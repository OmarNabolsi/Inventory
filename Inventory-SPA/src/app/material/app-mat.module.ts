import { NgModule } from '@angular/core';

import { MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule, MatMenuModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule
  ]
})
export class AppMatModule {}
