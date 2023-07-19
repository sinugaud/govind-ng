import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../service/login.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  updateForm: FormGroup;
  user: any;

  viewMode: boolean = true;
  isEditMode: boolean = true;

  constructor(public router: Router, public loginService: LoginService, public formBuilder: FormBuilder) {
    this.updateForm = this.formBuilder.group({
      firstName: ['', Validators.pattern('[a-zA-Z]+')],
      middleName: ['', Validators.pattern('[a-zA-Z]+')],
      lastName: ['', Validators.pattern('[a-zA-Z]+')],
      dateOfBirth: [''],
      address: [''],
      city: [''],
      state: [''],
      country: [''],
      zipcode: ['', [Validators.pattern('[0-9]+'), Validators.minLength(6)
        , Validators.maxLength(6)]],
      email: ['', Validators.email],
      username: [''],
    });
  }

  ngOnInit(): void {
    this.getUser();
  }

  validateDateOfBirth(control: any): { [key: string]: boolean } | null {
    const currentDate = new Date();
    const selectedDate = new Date(control.value);
    if (isNaN(selectedDate.getTime())) {
      return {'invalidDate': true};
    }
    if (selectedDate > currentDate) {
      return {'futureDate': true};
    }
    return null;
  }

  setViewByEditMode() {
    this.isEditMode = true;
    this.viewMode = false;
  }

  setViewByViewMode() {
    this.isEditMode = false;
    this.viewMode = true;
  }

  /* isEditMode(fieldName: string): boolean {
     return this.editModes[fieldName];
   }

   setEditMode(fieldName: string, event: Event) {
     console.log("i am in setEditMode");
     const target = event.currentTarget as HTMLInputElement;
     this.editModes[fieldName] = target.value === 'edit';
   }*/

  onSubmit() {
    if (this.updateForm.valid) {
      this.loginService.updateUser(this.updateForm.value).subscribe(
        (response) => {
          console.log('User updated:', response);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  getUser() {
    this.loginService.getUserDetails().subscribe(
      (response: any) => {
        console.log(response);
        this.user = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  homePage() {
    this.router.navigate(['/user']);
  }
}
