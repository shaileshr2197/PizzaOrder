import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';

const routes: Routes = [
  {
    path:'orders',
    component:OrdersComponent
  },
  {
    path:'view',
    component:ViewOrderComponent
  },
  {
    path:'',
    redirectTo:'orders',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
