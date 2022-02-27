import { Component, OnInit } from '@angular/core';

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

  gatherdetail(product:any){
    this.itemsInCart.push(product);
    this.counter++;
    this.cost=product.quantity*product.price;
    this.totalcost+=this.cost;
  }
}
