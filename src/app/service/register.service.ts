import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class RegisterService {

  constructor(public http: HttpClient) {
  }

  addUser(reqBody: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = {headers: headers};
    // @ts-ignore
    return this.http.post<any[]>('http://localhost:8085/user/add', reqBody, options);
  }

  getUser(id: any) {
    const url = `http://localhost:8085/user/find/${id}`;
    return this.http.get<any>(url);
  }

  verifyUser(id: any) {
    const url = `http://localhost:8085/user/verify/${id}`;
    return this.http.get<any>(url);
  }
}
