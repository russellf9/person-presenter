import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';


import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer = new Customer(-1, 'No Customer');

  constructor(private actRoute: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe(params => {
      console.log('my id is ', params.get('id'));

      const id = params.get('id');

      this.customerService.getCustomer(id).subscribe((customer: Customer) => {
        this.customer = customer;
      });
    });
  }
}
