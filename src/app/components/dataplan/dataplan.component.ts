import { Component, OnInit } from '@angular/core';
import { DataplanService } from 'src/app/services/dataplan.service';
import { Dataplan } from 'src/app/models/dataplan';

@Component({
  selector: 'app-dataplan',
  templateUrl: './dataplan.component.html',
  styleUrls: ['./dataplan.component.css']
})
export class DataplanComponent implements OnInit {

  dataplanList: Dataplan[] = []

  constructor(private dataplanService: DataplanService) { }

  ngOnInit(): void {
    this.dataplanService.getDataplan().subscribe((result)=>{
      this.dataplanList = result;
    })
  }

}
