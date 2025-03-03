import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : User = new User();
  message : string;
  constructor(private userService : UserService,private router : Router) {
    //default constructor
  }
  
  ngOnInit() {
    //default
  }

  register(){
    this.userService.doRegistration(this.user).subscribe(res => this.message=res);
    this.router.navigateByUrl('/register');
  }
}
