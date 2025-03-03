import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { UserService } from './service/user.service';
import { AdminhomeComponent } from './component/adminhome/adminhome.component';
import { ViewempsComponent } from './component/viewemps/viewemps.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewleavesComponent } from './component/viewleaves/viewleaves.component';
import { AddleaveComponent } from './component/addleave/addleave.component';
import { AddbalanceComponent } from './component/addbalance/addbalance.component';
import { AdminService } from './service/admin.service';
import { AddempComponent } from './component/addemp/addemp.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AssignmngComponent } from './component/assignmng/assignmng.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { MnghomeComponent } from './component/mnghome/mnghome.component';
import { EmpundmngComponent } from './component/empundmng/empundmng.component';
import { ApplyleaveComponent } from './component/applyleave/applyleave.component';
import {MatSelectModule} from '@angular/material/select';
import { ViewbalancesComponent } from './component/viewbalances/viewbalances.component';
import { ViewleaverequestsComponent } from './component/viewleaverequests/viewleaverequests.component';
import { MngrequestsComponent } from './component/mngrequests/mngrequests.component';
import { LeavestatusComponent } from './component/leavestatus/leavestatus.component';
import { MngbalancesComponent } from './component/mngbalances/mngbalances.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminhomeComponent,
    ViewempsComponent,
    ViewleavesComponent,
    AddleaveComponent,
    AddbalanceComponent,
    AddempComponent,
    ProfileComponent,
    AssignmngComponent,
    UpdateUserComponent,
    MnghomeComponent,
    EmpundmngComponent,
    ApplyleaveComponent,
    ViewbalancesComponent,
    ViewleaverequestsComponent,
    MngrequestsComponent,
    LeavestatusComponent,
    MngbalancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSelectModule

  ],
  providers: [UserService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
