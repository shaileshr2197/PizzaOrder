import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStatusPipe } from './pipes/order-status.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [OrderStatusPipe, LoaderComponent, AlertComponent],
  imports: [
    CommonModule
  ],
  exports:[OrderStatusPipe,LoaderComponent,AlertComponent]
})
export class SharedModule { }
