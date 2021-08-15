import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

   @Input() deviceItem : Device

  constructor(private msg: CartService) { }

  ngOnInit(): void {
  }
//creating handler to add to cart

handleAddToCart(){
  this.msg.sendMsg(this.deviceItem)
}
}
