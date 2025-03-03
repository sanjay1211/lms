import { Leave } from './leave';
import { LeaveBalance } from './leave-balance';
import { Role } from './Role';

export class User {
    userId: number
    username: string
    password: string
    empName: string
    empMob: string
    empMail: string
    gender: string
    empDob: Date
    empDoj: Date
    mngId:number
    role: Role
    leaves:Leave[];
    leaveBalances:LeaveBalance[];
}
