import { Component, OnInit } from '@angular/core';
import { LeaveBalance } from 'src/app/model/leave-balance';
import { User } from 'src/app/model/User';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-mngbalances',
  templateUrl: './mngbalances.component.html',
  styleUrls: ['./mngbalances.component.css']
})
export class MngbalancesComponent implements OnInit {

  constructor(private adminService:AdminService) { }
  leaveBalances:LeaveBalance[];
  user:User;
  ngOnInit() {
    this.adminService.getAllLeavebalance().subscribe(res=>this.leaveBalances=res);
    this.user=JSON.parse(localStorage.getItem('user'));
  }

}
