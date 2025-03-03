import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  message: string;
  exuser: User;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.userService.doLogin(this.user).subscribe(
      (data) => {
        this.exuser = data;
        if (this.exuser != null) {
          localStorage.setItem('user', JSON.stringify(this.exuser));
          if (this.exuser.role.roleId === 1) {
            this.router.navigateByUrl("/adminhome");
          } else if (this.exuser.role.roleId === 2) {
            this.router.navigateByUrl("/mnghome");
          } else if (this.exuser.role.roleId === 3) {
            this.router.navigateByUrl("/login");
          }
        } else {
          this.message = "Invalid login Credentials..!";
        }
      }
    );
  }
}
