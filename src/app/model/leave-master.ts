import { Leave } from "./leave"
import { LeaveBalance } from "./leave-balance"

export class LeaveMaster {
    lvmId:number
    lvmName:string
    lvmAbbr:string
    maxBalance:number
    leaves:Leave[]
    leaveBalances:LeaveBalance[]
}
