import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id: 1, deviceId: 1, deviceName: 'ONE', qty:4, price: 100},
    // {id: 2, deviceId: 2, deviceName: 'two', qty:7, price: 210},
    // {id: 2, deviceId: 3, deviceName: 'ONE', qty:3, price: 98},
    // {id: 3, deviceId: 4, deviceName: 'ONE', qty:1, price: 452},

  ];

  cartTotal = 0

  //import cartService and inject it here so as to subscribe to the observable
  constructor(private msg: CartService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((device: Device) =>{
    this.addDeviceToCart(device)
    })
  }

  addDeviceToCart(device: Device){

  let productExists = false

  for(let i in this.cartItems){
        if(this.cartItems[i].deviceId === device.id){  
          this.cartItems[i].qty++
          productExists = true
          break;
  }
}

  if(!productExists){
    this.cartItems.push({
          deviceId: device.id,
          deviceName: device.name,
          qty: 1,
          price: device.price
        })
  }



    // if (this.cartItems.length === 0){
    //   this.cartItems.push({
    //     deviceId: device.id,
    //     deviceName: device.name,
    //     qty: 1,
    //     price:device.price
    //   })
    // }else{
    //   for(let i in this.cartItems){
    //     if(this.cartItems[i].deviceId === device.id){
  
    //       this.cartItems[i].gty++
    //       break;
    //     }else{
    //       this.cartItems.push({
    //         deviceId: device.id,
    //         deviceName: device.name,
    //         qty: 1,
    //         price:device.price
    //       })
  
    //     }
    //   }

    // }
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })

  }
}
