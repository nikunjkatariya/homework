import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  jsondata=[
    {
      "id": 1,
      "imgurl":"./../assets/images/image1.jfif",
      "name": "Head Phone",
      "content":"Some quick example text to build on the card title and make up the bulk of the card's content.",
      "price": 150,
      "quantity": 15,
    },
    {
      "id": 2,
      "imgurl":"./../assets/images/image2.jfif",
      "name": "Smart Watch",
      "content":"Some quick example text to build on the card title and make up the bulk of the card's content.",
      "price": 80,
      "quantity": 10,
    },
    {
      "id": 3,
      "imgurl":"./../assets/images/image3.jfif",
      "name": "Camera",
      "content":"Some quick example text to build on the card title and make up the bulk of the card's content.",
      "price": 300,
      "quantity": 4,
    },
    {
      "id": 4,
      "imgurl":"./../assets/images/image4.jpg",
      "name": "Green Olive Lavender",
      "content":"Some quick example text to build on the card title and make up the bulk of the card's content.",
      "price": 80,
      "quantity": 20,
    },
    {
      "id": 5,
      "imgurl":"./../assets/images/image5.jpg",
      "name": "Watch",
      "content":"Some quick example text to build on the card title and make up the bulk of the card's content.",
      "price": 30,
      "quantity": 35,
    },
    {
      "id": 6,
      "imgurl":"./../assets/images/image6.jpg",
      "name": "Levolit",
      "content":"Some quick example text to build on the card title and make up the bulk of the card's content.",
      "price": 175,
      "quantity": 14,
    }
  ];

  @Output() newItemEvent = new EventEmitter<any>();
  additem(value:any){
    this.newItemEvent.emit(value);
  }
  
}
