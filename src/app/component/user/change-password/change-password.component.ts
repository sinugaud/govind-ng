import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../../service/login.service";
import {ConfirmedValidator} from "../registration/confirmed.validator";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  changePasswordMessage: string = "";
  changePasswordCondition: boolean = false;

  constructor(public route: ActivatedRoute, public formBuilder: FormBuilder, public loginService: LoginService, public router: Router) {
    this.changePasswordForm = this.formBuilder.group({
        oldPassword: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        userId: ['']
      }, {
        validator: ConfirmedValidator('password', 'confirmPassword')
      }
    );
  }

  ngOnInit() {
    const userIdByRoute = this.route.snapshot.paramMap.get('id');
    this.changePasswordForm.get('userId')?.setValue(userIdByRoute);
  }

  onSubmit() {
    this.loginService.changePasswordByToken(this.changePasswordForm.value).subscribe((res: any) => {
      console.log(res);
      this.changePasswordMessage = "New Password Status: " + res.success;
      this.changePasswordCondition = res.success;
    }, (err) => {
      this.changePasswordMessage = "Invalid Username / email";
    });
  }

  goOnLoginPage() {
    this.router.navigate(['/login']);
  }

  clearFields() {
    this.changePasswordForm.reset();
  }

  homePage() {
    this.router.navigate(['/user']);
  }

}
