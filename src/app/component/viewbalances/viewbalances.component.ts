import { Component, OnInit } from '@angular/core';
import { LeaveBalance } from 'src/app/model/leave-balance';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-viewbalances',
  templateUrl: './viewbalances.component.html',
  styleUrls: ['./viewbalances.component.css']
})
export class ViewbalancesComponent implements OnInit {

  constructor(private adminService:AdminService) { }
  leaveBalances:LeaveBalance[];
  ngOnInit() {
    this.adminService.getAllLeavebalance().subscribe(res=>this.leaveBalances=res);
  }

}
