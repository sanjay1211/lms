import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  emp: User;
  message: string;
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit() {
    this.emp = JSON.parse(localStorage.getItem('upEmp'));
    console.log(this.emp.role.roleId);
  }

  saveUpdate() {
    this.userService.doUpdateEmp(this.emp).subscribe(res => { this.message = res, alert(this.message) });
    this.router.navigateByUrl("/viewemp");
  }
}