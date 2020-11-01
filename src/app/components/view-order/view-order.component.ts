import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IOrders } from 'src/app/interfaces/orders.interface';
import { IAppState } from 'src/app/interfaces/state.interface';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {

  constructor(private store:Store<IAppState>,private router:Router,private commonService:CommonService) { }

  /**
   * Desc : Observable for orders
  */
  public order:Observable<IOrders> = this.store.select(order=>order.order.order);

  /**
   * Desc : Observable for Status COnfig
  */
  public status:Observable<object[]> = this.store.select(order=>order.order.status);

  /**
   * Desc : Holds Status Values
  */
  public statusVal:any[]

  /**
   * Desc : Holds Current Order 
  */
  public orderVal;

  ngOnInit(): void {
    this.order.subscribe((data)=>{
      this.orderVal = data;
      if(!data.id){
        this.router.navigate(['./orders'])
      }
    })

    this.status.subscribe(data=>{
      this.statusVal = data;
    })
    setTimeout(() => {
      this.commonService.loader(false);
    }, 300);
    
  }
  /**
   * Desc : Get label for displyed status on list
  */
  public getStatus(status:string):string{
    return this.statusVal.filter((statusVal)=>statusVal.status === status)[0].label;
  }

}
