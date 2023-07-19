import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../../service/login.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  successMessage: string = '';
  successMessageCondition: boolean = true;
  private timeoutId: any;

  constructor(
    public formBuilder: FormBuilder,
    public loginService: LoginService,
    public router: Router,
    public toaster: ToastrService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  showSuccess() {
    this.toaster.success('You have logged in successfully.', 'Waw!');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.getAccessToken(this.loginForm.value).subscribe(
      (res: any) => {
        if (res) {
          localStorage.setItem('accessToken', res.access_token);
          localStorage.setItem('organization', res.organization[0].id);

          localStorage.setItem('expires_in', res.expires_in);
          clearTimeout(this.timeoutId);
          this.setLogoutTimeout(res.expires_in);

          this.router.navigate(['/user']);
          this.showSuccess();
          this.successMessageCondition = true;
        }
      },
      (err) => {
        this.successMessageCondition = false;
        this.successMessage = 'Invalid Username / Password';
      }
    );
  }

  goOnRegistrationPage() {
    this.router.navigate(['/register']);
  }

  clearFields() {
    this.loginForm.reset();
  }

  setLogoutTimeout(timeout: number) {
    this.timeoutId = setTimeout(() => {
      this.logout();
    }, timeout * 1000);
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('organization');
    localStorage.removeItem('expires_in');
    clearTimeout(this.timeoutId); // Clear the timeout if exists
    this.router.navigate(['/login']);
  }
}
