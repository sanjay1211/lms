import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/model/leave';
import { User } from 'src/app/model/User';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styleUrls: ['./leavestatus.component.css']
})
export class LeavestatusComponent implements OnInit {
  
  constructor(private adminService:AdminService) { }
  leaves:Leave[];
  user:User;
  ngOnInit() {
    console.log("leavestatus")
    this.adminService.getAllLeave().subscribe(res=>this.leaves=res);
    this.user=JSON.parse(localStorage.getItem('user'));
  }

  cancel(id:number){
    this.adminService.cancel(id).subscribe(res=>this.leaves=res);
  }

}
