import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 user:User = new User(0,'','',[])
  constructor(private uService: UserService, private router:Router) { }

  registerUser(): void{
    this.uService.saveUser(this.user).subscribe((result)=>{
      this.user = result;
    })
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}
