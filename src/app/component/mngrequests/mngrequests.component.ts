import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/model/leave';
import { User } from 'src/app/model/User';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-mngrequests',
  templateUrl: './mngrequests.component.html',
  styleUrls: ['./mngrequests.component.css']
})
export class MngrequestsComponent implements OnInit {
  leaves:Leave[];
  user:User;
  leave:Leave=new Leave();
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.getAllLeave().subscribe(res=>this.leaves=res);
    this.user=JSON.parse(localStorage.getItem('user'));
  }

  approve(id:number){
    this.leave.lvId=id;
    this.leave.user=this.user;
   this.adminService.approve(this.leave).subscribe(res=>this.leaves=res);
  }

  reject(id:number){
    this.leave.lvId=id;
    this.leave.user=this.user;
    this.adminService.reject(this.leave).subscribe(res=>this.leaves=res);
  }

}
