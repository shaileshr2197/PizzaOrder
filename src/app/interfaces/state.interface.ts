import { IOrders } from'./orders.interface';

export interface IAppState {
    order:IStateData
}

export interface IStateData{
    order:IOrders,
    list:IOrders[],
    status:Array<object>
}