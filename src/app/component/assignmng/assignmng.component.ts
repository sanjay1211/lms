import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-assignmng',
  templateUrl: './assignmng.component.html',
  styleUrls: ['./assignmng.component.css']
})
export class AssignmngComponent implements OnInit {
  users : User[];
  emp:User=new User();
  mng:User=new User();
  message:string;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getEmployees().subscribe(res => {this.users=res});
  }
  assignMng(){
    this.emp.mngId=this.mng.userId;
    this.userService.doAssign(this.emp).subscribe(res => this.message=res);
  }
}
