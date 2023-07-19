import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(public http: HttpClient) {
  }

  getAccessToken(credential: any) {
    const url = 'http://localhost:8085/oauth/token';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa('mobile:pin')
    });
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', credential.username)
      .set('password', credential.password);
    return this.http.post(url, body.toString(), {headers});
  }

  verifyUsernameOrEmail(usernameOrEmail: any) {
    let headers = new Headers();
    console.log(usernameOrEmail);
    headers.append('Content-Type', 'application/json');
    let options = {headers: headers};
    // @ts-ignore
    return this.http.post<any[]>('http://localhost:8085/user/forgetPassword', usernameOrEmail, options);
  }

  getAllUsers() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
    });
    const options = {headers};
    return this.http.get<any[]>('http://localhost:8085/user/find', options);
  }

  getUserDetails() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    });
    const options = {headers};
    return this.http.get<any[]>('http://localhost:8085/user/loggedinUser', options);
  }


  updatePassword(reqBody: any) {
    let headers = new Headers();
    console.log(reqBody);
    headers.append('Content-Type', 'application/json');
    let options = {headers: headers};
    // @ts-ignore
    return this.http.post<any[]>('http://localhost:8085/user/updatePassword', reqBody, options);
  }

  changePasswordByToken(reqBody: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    });
    const options = {headers};
    return this.http.post<any[]>('http://localhost:8085/user/changePasswordByToken', reqBody, options);

  }

  logoutUser() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    });
    let item = localStorage.getItem("accessToken");
    const options = {headers};
    console.log(localStorage.getItem("accessToken"));
    return this.http.post<any[]>('http://localhost:8085/user/logout', {token: item}, options);
  }

  updateUser(value: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    });
    const options = {headers};
    return this.http.put<any[]>('http://localhost:8085/user/update', value, options);
  }

  getUserById(id: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    });
    const options = {headers};
    const url = `http://localhost:8085/user/find/${id}`;
    return this.http.get<any>(url, options);
  }
}
