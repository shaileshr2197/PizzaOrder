import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { order } from '../actions/orders.action';
import { orders } from '../data/orderData';
import { IAppState } from '../interfaces/state.interface';
declare var $:any;
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private store:Store<IAppState>) { }

  /**
   * Desc : Get Order Info for corresponding order Id
  */
  public getOrder(orderId:number){
    return this.store.select((order)=>order.order.list.filter((order)=>order.id == orderId)[0]);
  }

  /**
   * Desc : Get Order Info for corresponding order Id
  */
  public getAllOrder():any{
    return this.store.select(order=>order.order.list);
  }

  /**
   * Desc : Show Loder
  */
  public loader(status:boolean){
    status ? $('.cls-loading').addClass('show') : $('.cls-loading').removeClass('show')
  }
}
