import { Component, OnInit } from '@angular/core';
import { LeaveMaster } from 'src/app/model/leave-master';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.css']
})
export class AddleaveComponent implements OnInit {
  leaveMaster:LeaveMaster=new LeaveMaster();
  message : string
  constructor(private adminService : AdminService) { }

  ngOnInit() {
  }
  saveLeave(){
    if(this.leaveMaster.maxBalance < 1 || this.leaveMaster.maxBalance > 20){
      this.message="Balance should be greater than 0 and less than 20";
      return
    }else{
        this.adminService.saveLeaveType(this.leaveMaster).subscribe(res => this.message=res);
    }
  
  }
}
