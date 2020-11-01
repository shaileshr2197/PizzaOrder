import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { orderReducer } from './reducers/orders.reduce';
import { EffectsModule } from '@ngrx/effects';
import { orderEffect } from '../app/effects/orders.effect';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    ViewOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({
      order:orderReducer
    }),
    EffectsModule.forRoot([orderEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
