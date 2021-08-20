import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User(0, "", "", []);
  users: User[] = [];


  constructor(private uService: UserService,
    // private formBuilder: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void {

  }
  login() {
    let iUsername = this.user.username;
    let iPassword = this.user.password;

    this.uService.findAllUsers().subscribe((result) => {
      this.users = result;
      // for (let i=0, l = this.users.length;i<1; i++){
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].username == iUsername && this.users[i].password == iPassword) {
          let str = JSON.stringify(iUsername);
          // let pw = JSON.stringify(iPassword)
          sessionStorage.setItem('username', str)
          sessionStorage.setItem('password', 'ipassword')
          this.router.navigate(['/store'])
        }
        // this.router.navigate(['/register'])
      }
    })
  }
}
