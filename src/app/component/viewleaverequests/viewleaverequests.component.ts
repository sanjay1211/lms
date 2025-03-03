import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/model/leave';
import { User } from 'src/app/model/User';
import { AdminService } from 'src/app/service/admin.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-viewleaverequests',
  templateUrl: './viewleaverequests.component.html',
  styleUrls: ['./viewleaverequests.component.css']
})
export class ViewleaverequestsComponent implements OnInit {
  users: User[];
  constructor(private adminService:AdminService,private userService: UserService) { }
  leaves:Leave[];
  ngOnInit() {
    this.adminService.getAllLeave().subscribe(res=>this.leaves=res);
    this.userService.getEmployees().subscribe(res => { this.users = res });
  }

}
