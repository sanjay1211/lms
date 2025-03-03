import { Component, OnInit } from '@angular/core';
import { LeaveBalance } from 'src/app/model/leave-balance';
import { LeaveMaster } from 'src/app/model/leave-master';
import { User } from 'src/app/model/User';
import { AdminService } from 'src/app/service/admin.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-addbalance',
  templateUrl: './addbalance.component.html',
  styleUrls: ['./addbalance.component.css']
})
export class AddbalanceComponent implements OnInit {
    
  leaveBalance:LeaveBalance=new LeaveBalance();
  users:User[];
  leaveMasters:LeaveMaster[];
  user:User=new User();
  leaveMaster:LeaveMaster=new LeaveMaster();
  message:string;
  constructor(private userService : UserService,private adminService:AdminService) { }

  ngOnInit() {
    this.userService.getEmployees().subscribe(res => {this.users=res});
    this.adminService.getAllLeaveTypes().subscribe(res => this.leaveMasters=res);
  }
  allocateLve(){
   this.leaveBalance.user=this.user;
   this.leaveBalance.leaveMaster=this.leaveMaster;
    if(this.leaveBalance.balance < 0){
      this.message="Balance should not be negative..!"
    }else{
      this.adminService.doAllocate(this.leaveBalance).subscribe(res=>this.message=res);
    }
  }
}
