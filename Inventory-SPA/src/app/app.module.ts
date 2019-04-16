import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMatModule } from './material/app-mat.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ControlPanelComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMatModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
