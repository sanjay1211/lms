import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  user : User = new User();
  
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
  }
  register(){
    this.userService.doRegistration(this.user).subscribe(res => alert(res));
    this.router.navigateByUrl('/viewemp');
  }
}
