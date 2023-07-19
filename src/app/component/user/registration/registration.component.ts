import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ConfirmedValidator} from "./confirmed.validator";
import {ToastrService} from "ngx-toastr";
import {RegisterService} from "../../../service/register.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup = new FormGroup({});

  constructor(public formBuilder: FormBuilder, public router: Router, public toaster: ToastrService,
              public registerService: RegisterService) {
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
        middleName: ['', Validators.pattern('[a-zA-Z]+')],
        lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
        dateOfBirth: ['', [Validators.required, this.validateDateOfBirth]],
        joiningDate: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        zipcode: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(6)
          , Validators.maxLength(6)]],
        noOfLeaves: ['', [Validators.required, Validators.pattern('[0-9]+')]],
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required]
      }, {
        validator: ConfirmedValidator('password', 'confirmPassword')
      }
    );
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

  showSuccess() {
    this.toaster.success('Success! Your request has been processed successfully.!', 'Waw!');
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.registerService.addUser(this.registrationForm.value).subscribe(
        (response) => {
          this.showSuccess();
          console.log('User created:', response);
        },
        (error) => {
          console.error(error);
        }
      );
      this.reset();
    } else {
      // Mark form controls as touched to display validation errors
      this.registrationForm.markAllAsTouched();
    }
  }

  reset() {
    this.registrationForm.reset();
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }

  goToListPage() {
    this.router.navigate(['/user/list']);
  }
}
