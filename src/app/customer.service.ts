import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL = 'api/';

  constructor(private httpClient: HttpClient) { }

  getCustomers() {
    return this.httpClient.get(this.API_URL + 'customers');
  }

  getCustomer(customerId) {
    return this.httpClient.get(`${this.API_URL + 'customers'}/${customerId}`);
  }
}
