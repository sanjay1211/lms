import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveMaster } from 'src/app/model/leave-master';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-viewleaves',
  templateUrl: './viewleaves.component.html',
  styleUrls: ['./viewleaves.component.css']
})
export class ViewleavesComponent implements OnInit {

  leaveMasters:LeaveMaster[];
  constructor(private adminService:AdminService, private router: Router) { }

  ngOnInit() {
    this.adminService.getAllLeaveTypes().subscribe(res => this.leaveMasters=res);
  }
  
  deleteLvm(lvmId:number){
    this.adminService.doDeleteLvm(lvmId).subscribe(res => alert(res));
    this.router.navigateByUrl('/viewleave');
  }
}
