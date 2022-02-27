import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  constructor() { }

  @Input() datareceiver:any=[];

  ngOnInit(): void {
  }

  @Output() cartdata = new EventEmitter<any>();
  addtocart()
  {
    if(this.datareceiver.quantity>0)
    {
      this.cartdata.emit(this.datareceiver);
    }
  }

}
