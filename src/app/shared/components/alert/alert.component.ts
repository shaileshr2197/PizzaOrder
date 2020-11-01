import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  /**
   * Desc : Holds Order Id and Status
  */
  @Input() public data:object;

  /**
   * Desc : Emit Order Id and alert status to parent
  */
  @Output() public statusVal:EventEmitter<object> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Desc : Change status
  */
  public changeStatus(status:boolean){
    this.statusVal.emit({
      data:this.data,
      status
    })
  }

}
