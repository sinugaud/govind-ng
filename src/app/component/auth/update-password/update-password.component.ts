import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../service/login.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmedValidator} from "../../user/registration/confirmed.validator";

@Component({
  selector: 'app-newpassword',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent {
  newPasswordForm: FormGroup;
  newPasswordMessage: boolean = false;
  newPassword: string = "";

  constructor(public route: ActivatedRoute, public formBuilder: FormBuilder, public loginService: LoginService, public router: Router) {
    this.newPasswordForm = this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        userId: ['']
      }, {
        validator: ConfirmedValidator('password', 'confirmPassword')
      }
    );
  }

  ngOnInit() {
    const userIdbyRoute = this.route.snapshot.paramMap.get('id');
    this.newPasswordForm.get('userId')?.setValue(userIdbyRoute);
  }

  onSubmit() {
    this.loginService.updatePassword(this.newPasswordForm.value).subscribe((res: any) => {
      console.log(res);
      this.newPasswordMessage = res.success;
      if (this.newPasswordMessage) {
        this.newPassword = "Your password is changed"
      } else {
        this.newPassword = "Enter your new password for reset!";
      }
    }, (err) => {
      this.newPassword = "Invalid Username / email";
    });
  }

  goOnLoginPage() {
    this.router.navigate(['/login']);
  }

  clearFields() {
    this.newPasswordForm.reset();
  }

}
