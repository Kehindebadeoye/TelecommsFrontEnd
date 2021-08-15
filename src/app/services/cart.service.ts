import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Device } from '../models/device';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  //import subject from rxjs that help in trigering a msg and also listen to a msg and create an instance of it
    subject = new Subject() // Triggering ab event
  constructor() { }
  sendMsg(device){          //sending your msg here and inject this into product item component
    this.subject.next(device)
  }
  getMsg(){                   //listening to your created msg
    return this.subject.asObservable()
  }
}
