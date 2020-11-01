import { actions, orderActions } from "../actions/orders.action";
import { statusConf } from '../data/statusConfig'
import { orders } from '../data/orderData';

const setState = {
    order : {},
    list:orders,
    status:statusConf
}

export function orderReducer(state:object = setState,action:actions){
    switch(action.type){
        case orderActions.GET_ALL_ORDERS :
            return {
                ...state,
                list:action.orders
            };
        case orderActions.ORDER_INFO : 
            return {
                ...state,
                order:action.order
            };
        default :
            return state;
    }
}