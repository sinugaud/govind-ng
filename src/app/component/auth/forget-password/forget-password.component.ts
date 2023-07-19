import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forgetPasswordForm: FormGroup;
  forgetPasswordMessage: boolean = false;
  forgetPassword: string = "";

  constructor(public formBuilder: FormBuilder, public loginService: LoginService, public router: Router) {
    this.forgetPasswordForm = this.formBuilder.group({
      usernameOrEmail: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.verifyUsernameOrEmail(this.forgetPasswordForm.value).subscribe((res: any) => {
      console.log(res);
      this.forgetPasswordMessage = res.success;
      if (this.forgetPasswordMessage) {
        this.forgetPassword = "Please check your registered email"
      } else {
        this.forgetPassword = "Username or email not exist";
      }
    }, (err) => {
      this.forgetPassword = "Invalid Username / email";
    });
  }

  goOnLoginPage() {
    this.router.navigate(['/login']);
  }

  clearFields() {
    this.forgetPasswordForm.reset();
  }

}

