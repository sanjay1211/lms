import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Leave } from '../model/leave';
import { LeaveBalance } from '../model/leave-balance';
import { LeaveMaster } from '../model/leave-master';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    
    })
  };

  saveLeaveType(leaveMaster : LeaveMaster) : Observable<string>{
    return this.http.post<string>(`${environment.API_URL}/saveLeaveType`, leaveMaster,{responseType:'text' as 'json'})
  }
  apply(leave : Leave) : Observable<string>{
    return this.http.post<string>(`${environment.API_URL}/applyLeave`, leave,{responseType:'text' as 'json'})
  }

  getAllLeaveTypes():Observable<LeaveMaster[]>{
    return this.http.get<LeaveMaster[]>(`${environment.API_URL}/leaveMasters`);
  }

  getAllLeave():Observable<Leave[]>{
    return this.http.get<Leave[]>(`${environment.API_URL}/leaves`);
  }

  getAllLeavebalance():Observable<LeaveBalance[]>{
    return this.http.get<LeaveBalance[]>(`${environment.API_URL}/leaveBalances`);
  }
  doDeleteLvm(id:number): Observable<string>{
    return this.http.delete<string>(`${environment.API_URL}/deleteLvm/${id}`, { responseType: 'text' as 'json' });
  }
  public doAllocate(leaveBalance:LeaveBalance):Observable<string> {
    return this.http.post<string>(`${environment.API_URL}/allocateBalance`,leaveBalance,{ responseType: 'text' as 'json' });
  }

  approve(leave:Leave):Observable<Leave[]>{
    return this.http.post<Leave[]>(`${environment.API_URL}/approve`,leave);
  }
  reject(leave:Leave):Observable<Leave[]>{
    return this.http.post<Leave[]>(`${environment.API_URL}/reject`,leave);
  }

  cancel(lvId:number):Observable<Leave[]>{
    return this.http.get<Leave[]>(`${environment.API_URL}/cancel/${lvId}`);
  }
}
