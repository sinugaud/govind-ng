import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: any[] = [];

  constructor(private loginService: LoginService,private router: Router) {
  }

  ngOnInit(): void {
    this.loginService.getAllUsers().subscribe(
      (response: any[]) => {
        console.log(response);
        this.users = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addUser() {
    this.router.navigate(['/user/register']);
  }

  viewUser(id: any) {
    this.router.navigate([`/user/userFromList/${id}`]);
  }

  deleteUser(id: any) {

  }
}



