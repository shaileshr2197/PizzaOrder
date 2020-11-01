import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAllOrders, getOrder } from 'src/app/actions/orders.action';
import { IOrders } from 'src/app/interfaces/orders.interface';
import { IAppState } from 'src/app/interfaces/state.interface';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private store:Store<IAppState>,private router:Router,private commonService:CommonService) { }

  /**
   * Desc : Holds Order State Value
  */
  private orders:Observable<IOrders[]>;

  /**
   * Desc : All status state value
  */
  private status:Observable<object[]>;

  /**
   * Desc : Holds Order State Value
  */
  public allOrders:IOrders[];

  /**
   * Desc : All status state value
  */
  public statusVal:any[];

  /**
   * Desc : Alert Content
  */
  public alertContent:any;


  ngOnInit(): void {
    /**
     * Desc : store state variable as observables
    */
    this.orders = this.store.select(order=>order.order.list);
    this.status = this.store.select(order=>order.order.status);

    this.orders.subscribe((data)=>{
      this.allOrders = data;
    })

    this.status.subscribe(data=>{
      this.statusVal = data;
    })
  }

  /**
   * Desc : Get label for displyed status on list
  */
  public getStatus(status:string):string{
    return this.statusVal.filter((statusVal)=>statusVal.status === status)[0].label;
  }

  /**
   * Desc : View Order
  */
  public viewOrder(orderId:number){
    this.store.dispatch(new getOrder(orderId));
    this.commonService.loader(true);
    this.router.navigate(['./view'])
  }

  /**
   * Desc : Show Alert
  */
  public showAlert(id:number,status:string){
    this.alertContent = {
      orderId: id,
      status
    }
  }

  /**
   * Desc : Change status fo particular order
  */
  public changeStatus(data){
    this.alertContent = {};
    if(data.status){
      let orders = JSON.parse(JSON.stringify(this.allOrders));
      orders.map((order)=>{
        if(order.id == data.data.orderId){
          order.status = data.data.status
        }
      })
      this.store.dispatch(new getAllOrders(orders));
    }
  }

}
