import { Pipe, PipeTransform } from '@angular/core';
import { IOrders } from 'src/app/interfaces/orders.interface';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

  /**
   * Desc : Return Table Data based on Order status
  */
  transform(value: IOrders[], status: string): IOrders[] {
    return value.filter((order)=>order.status === status);
  }

}
