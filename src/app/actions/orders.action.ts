import { Action } from '@ngrx/store';
import { IOrders } from '../interfaces/orders.interface';

export enum orderActions {
    GET_ALL_ORDERS = '[Orders] Get all orders',
    GET_ORDER = '[Order] Get Particular Order',
    ORDER_INFO = '[Order] Order Info'
}

export class getAllOrders implements Action{
   readonly type = orderActions.GET_ALL_ORDERS;
   constructor(public orders:IOrders[]){}
}

export class getOrder implements Action {
    readonly type = orderActions.GET_ORDER;
    constructor(public orderId:number){}
}

export class order implements Action {
    readonly type = orderActions.ORDER_INFO;
    constructor(public order:IOrders){}
}

export type actions = getAllOrders | getOrder | order;