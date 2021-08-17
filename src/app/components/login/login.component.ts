import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any ={}

  constructor(private uService: UserService,
            // private formBuilder: FormBuilder,
            // private router:Router
  
    ) { }

  ngOnInit(): void {

  }
login(){

console.log();

}
}
