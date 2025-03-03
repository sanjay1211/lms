import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/model/leave';
import { LeaveBalance } from 'src/app/model/leave-balance';
import { LeaveMaster } from 'src/app/model/leave-master';
import { User } from 'src/app/model/User';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {
  emp:User;
  leaveBalances:LeaveBalance[];
  leave:Leave=new Leave();
  lvm:LeaveMaster=new LeaveMaster();
  message:string;
  constructor(private adminService:AdminService) { }
  ngOnInit() {
    this.emp = JSON.parse(localStorage.getItem('user'));
    this.adminService.getAllLeavebalance().subscribe(res=>this.leaveBalances=res);
  }
  applyLeave(){
    this.leave.status="Pending";
    this.leave.leaveMaster=this.lvm;
    this.leave.user=this.emp;
    this.adminService.apply(this.leave).subscribe(res=>this.message=res);
  }
}
