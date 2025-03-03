import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-viewemps',
  templateUrl: './viewemps.component.html',
  styleUrls: ['./viewemps.component.css']
})
export class ViewempsComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {

  }
  users: User[];
  emp: User;
  ngOnInit() {
    this.userService.getEmployees().subscribe(res => { this.users = res });
    this.emp = JSON.parse(localStorage.getItem('user'));

  }
  deleteUser(userId: number) {
    this.userService.doDeleteUser(userId).subscribe(res => alert(res));
    this.router.navigateByUrl('/viewemp');
  }

  updateUser(id: number) {
    console.log(id);
    this.userService.doUpdateUser(id).subscribe((res) => {
      this.emp = res;
      if (this.emp != null) {
        localStorage.setItem('upEmp', JSON.stringify(this.emp));
        this.router.navigateByUrl('/updateUser');
      }
    })
  }
}
