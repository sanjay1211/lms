import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbalanceComponent } from './component/addbalance/addbalance.component';
import { AddempComponent } from './component/addemp/addemp.component';
import { AddleaveComponent } from './component/addleave/addleave.component';
import { AdminhomeComponent } from './component/adminhome/adminhome.component';
import { ApplyleaveComponent } from './component/applyleave/applyleave.component';
import { AssignmngComponent } from './component/assignmng/assignmng.component';
import { EmpundmngComponent } from './component/empundmng/empundmng.component';
import { HomeComponent } from './component/home/home.component';
import { LeavestatusComponent } from './component/leavestatus/leavestatus.component';
import { LoginComponent } from './component/login/login.component';
import { MngbalancesComponent } from './component/mngbalances/mngbalances.component';
import { MnghomeComponent } from './component/mnghome/mnghome.component';
import { MngrequestsComponent } from './component/mngrequests/mngrequests.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { ViewbalancesComponent } from './component/viewbalances/viewbalances.component';
import { ViewempsComponent } from './component/viewemps/viewemps.component';
import { ViewleaverequestsComponent } from './component/viewleaverequests/viewleaverequests.component';
import { ViewleavesComponent } from './component/viewleaves/viewleaves.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'addBalance',component:AddbalanceComponent},
  {path:'viewemp',component:ViewempsComponent},
  {path:'addLeave',component:AddleaveComponent},
  {path:'addEmp',component:AddempComponent},
  {path:'viewleave',component:ViewleavesComponent},
  {path:'mnghome',component:MnghomeComponent},
  {path:'applylve',component:ApplyleaveComponent},
  {path:'profile',component:ProfileComponent},
  {path:'viewbalance',component:ViewbalancesComponent},
  {path:'viewrequests',component:ViewleaverequestsComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'empUndMng',component:EmpundmngComponent},
  {path:'updateUser',component:UpdateUserComponent},
  {path:'viewstatus',component:LeavestatusComponent},
  {path:'assignmng',component:AssignmngComponent},
  {path:'mngrequests',component:MngrequestsComponent},
  {path:'home', component:HomeComponent},
  {path:'mngbalances',component:MngbalancesComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
