import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartListService } from './services/cart-list.service';

@Component({
  selector: 'carts-list',
  templateUrl: './carts-list.template.html',
  styleUrls: ['./carts-list.style.scss'],
})
export class CartsListComponent implements OnInit {
  carts!: Observable<
    { name: string; translate: string; description: string }[]
  >;

  constructor(private cartService: CartListService) {}

  ngOnInit() {
    this.carts = this.cartService.getShippingPrices();
  }
}
