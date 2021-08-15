import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../models/device';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:8085/devices'


@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  // devices: Device [] = [
  //   new Device(1, 'Iphone 12', 'Build to last the test of time,efficient and durable',1052.5,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009833_sd.jpg'),
  //   new Device(2, 'Iphone 10', 'Award winning smart phone for 2021 and beyond',965.12,'https://images.macrumors.com/t/jdDxZzVnqBW4yJc16UR0DRoiHP4=/1600x0/article-new/2018/04/product-red-iphone-8.jpg'),
  //   new Device(3, 'Samsung S21', 'Simple design with you in mind with 700GB RAM',785.25,'https://inlandcellular.com/wp-content/uploads/2021/02/S21-Violet-01.png'),
  //   new Device(4, 'Samsung Galaxy z fold3', 'Exclusive for you. Office and entertaiment on the go',2075.25,'https://cdn.mos.cms.futurecdn.net/g8e8f8orguusXXUJ7hSLy.jpeg'),
  //   new Device(5, 'Motorola', 'Slim and durable. built with the latest technology and advanced features',945.44,'https://images.idgesg.net/images/article/2020/04/motorola-edge-plus-100839493-large.jpg'),
  //   new Device(6, 'Nokia', 'Back to the days that Nokia rules the world of technology',499.25,'https://www.telegraph.co.uk/content/dam/technology/2016/03/03/nokia_3250_0_trans_NvBQzQNjv4BqIy-hI_Rb7umEEAnFLxzn2nrjJi2layT2HdJ6gaE3fxc.jpg?imwidth=450'),
  //   new Device(7, 'Alcatel', 'You need a phone that can last you 72 hours without charging',266.99,'https://m-cdn.phonearena.com/images/phones/74755-350/Alcatel-1x-2019.jpg'),

  // ]
//injecting httpclient
  constructor(private http: HttpClient) { }

  //create getDevices which returns an array
  getDevices(): Observable<Device[]>{
    //Populate devices from backend and return an Observable
    return this.http.get<Device[]>(apiUrl);
  } 
}
