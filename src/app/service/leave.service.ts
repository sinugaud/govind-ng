import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class LeaveService {

  constructor(public http: HttpClient) {
  }

  addLeave(reqBody: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    });
    const options = {headers};
    // @ts-ignore
    return this.http.post<any[]>('http://localhost:8085/user/addEmployeeLeave', reqBody, options);
  }

  getAllLeaves() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
    });
    const options = {headers};
    return this.http.get<any[]>('http://localhost:8085/user/findLeaves', options);
  }

  deleteUser(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    });
    const options = {headers};
    const url = `http://localhost:8085/user/deleteLeave/${id}`;
    return this.http.delete<any[]>(url, options);
  }

  getLeave(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    });
    const options = {headers};
    const url = `http://localhost:8085/user/leave/${id}`;
    return this.http.get<any[]>(url, options);
  }

  EditLeave(id: number, reqBody: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    });
    const options = {headers};
    const url = `http://localhost:8085/user/leave/update/${id}`;
    return this.http.put<any[]>(url, reqBody, options);
  }
}
