import { Component, OnInit } from '@angular/core';
import { DataplanService } from 'src/app/services/dataplan.service';
import { Dataplan } from 'src/app/models/dataplan';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dataplan',
  templateUrl: './dataplan.component.html',
  styleUrls: ['./dataplan.component.css']
})
export class DataplanComponent implements OnInit {

  dataplanList: Dataplan[] = []

  constructor(private dataplanService: DataplanService) { }

  save(amount : number) : any{
    // this.dataplanService.saveDataPlan(amount);
    let str = JSON.stringify(amount)
    sessionStorage.setItem('uPlanId', str)
  }
 
  ngOnInit(): void {
    this.dataplanService.getDataplan().subscribe((result)=>{
      this.dataplanList = result;
    })
  }

}
