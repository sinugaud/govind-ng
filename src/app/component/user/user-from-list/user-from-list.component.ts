import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LoginService} from "../../../service/login.service";

@Component({
  selector: 'app-user-from-list',
  templateUrl: './user-from-list.component.html',
  styleUrls: ['./user-from-list.component.scss']
})
export class UserFromListComponent implements OnInit {
  id: any;
  user: any = {
    address: '',
    city: '',
    country: '',
    createdDate: '',
    dateOfBirth: '',
    email: '',
    firstName: '',
    id: '',
    joiningDate: '',
    lastName: '',
    leavingDate: '',
    middleName: '',
    modifiedDate: '',
    state: '',
    username: '',
    verified: '',
    zipcode: '',
  };

  constructor(private route: ActivatedRoute, private loginService: LoginService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  convertDate(inputDate: string): string {
    const dateTime = new Date(inputDate);
    const day = dateTime.getDate().toString().padStart(2, '0');
    const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
    const year = dateTime.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    if (this.id != null) {
      this.loginService.getUserById(this.id).subscribe(
        (response) => {
          console.log(response);
          this.user = response;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
