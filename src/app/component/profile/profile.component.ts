import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;
  message:string;
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem('user'));
  }
  
  update(){
    this.userService.doUpdate(this.user).subscribe(res => {this.message=res,alert(this.message)});
    this.router.navigateByUrl("/login");
  }

}
