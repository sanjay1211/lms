import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-empundmng',
  templateUrl: './empundmng.component.html',
  styleUrls: ['./empundmng.component.css']
})
export class EmpundmngComponent implements OnInit {
  users: User[];
  emp: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getEmployees().subscribe(res => { this.users = res });
    this.emp = JSON.parse(localStorage.getItem('user'));
  }

}
