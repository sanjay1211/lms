import { LeaveMaster } from "./leave-master";
import { User } from "./User";

export class Leave {
    lvId :number;
    fromDate:Date;
    toDate:Date;
    noOfDays:number;
    status:string;
    reason:string;
    leaveMaster:LeaveMaster;
    user:User;
    actionBy:string;
}
