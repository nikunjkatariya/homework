import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itemsInCart =[{
    "id": 0,
    "imgurl":"",
    "name": "XXX",
    "content":"",
    "price": 0,
    "quantity": 0,
  },];

  totalcost=0;
  cost=0;
  counter=0;
  // Menubar Cart
  @Output() cartcounter = new EventEmitter<number>();

  gatherdetail(product:any){
    this.itemsInCart.push(product);
    this.cartcounter.emit();
    this.counter++;
    this.cost=1*product.price;
    this.totalcost+=this.cost;
  }

}
