import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { getOrder, order, orderActions} from '../actions/orders.action';
import { CommonService } from '../shared/common.service';

@Injectable()
export class orderEffect {

    @Effect() getOrders = this.action.pipe(
        ofType<getOrder>(orderActions.GET_ORDER),
            switchMap((params)=>{
                return this.commonService.getOrder(params.orderId)
                .pipe(
                    map((data)=>
                    new order(data)
                ))
            }))

    constructor(private action:Actions,private commonService:CommonService){
    }
}