import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @Input() login: any
  user: User = new User(0,'','',[],'','');
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  getStoredUser(){
  let data = sessionStorage.getItem('username')
 return data
 
  }
  logout(){
    sessionStorage.clear()
    this.router.navigate(['/home'])
  }
  getPlan(){
    let result = sessionStorage.getItem('uPlanId')
    return result;
  }
}
