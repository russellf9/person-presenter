import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'customers', component: CustomerListComponent},
  {path: 'customer/:id', component: CustomerDetailComponent},
  {path: '' , redirectTo: '/customers', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
