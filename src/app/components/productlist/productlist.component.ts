import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/models/device';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  deviceList: Device[] = []

    //dependency injection
  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.deviceService.getDevices().subscribe((devices)=>{
      this.deviceList = devices;
    })
  }

}
