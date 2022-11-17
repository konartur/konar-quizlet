import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CartListService {
  constructor(private http: HttpClient) {}

  public getShippingPrices() {
    return this.http.get<
      { name: string; translate: string; description: string }[]
    >('words.json');
  }
}
