import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartsListComponent } from './carts-list/carts-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CartsListComponent, CartItemComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
