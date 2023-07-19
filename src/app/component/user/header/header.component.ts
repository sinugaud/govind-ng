import {Component, ElementRef, OnInit} from '@angular/core';
import {LoginService} from "../../../service/login.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  roleBoolean: boolean = false;

  constructor(public elementRef: ElementRef, public loginService: LoginService, public router: Router, public toaster: ToastrService) {
  }

  showNavbarMenu() {
    const dropdownEle = (<HTMLElement>this.elementRef.nativeElement).querySelector(
      '.dropdown-menu'
    );
    console.log(dropdownEle);
    if (dropdownEle) {
      const classes: DOMTokenList = dropdownEle.classList;
      console.log(classes);
      if (classes.contains('show')) {
        classes.remove('show');
      } else {
        classes.add('show');
      }
    }
  }

  ngOnInit(): void {
    let item = localStorage.getItem("organization");
    if (item == "2") {
      this.roleBoolean = false;
    } else {
      this.roleBoolean = true;
    }
  }

  logout() {
    this.loginService.logoutUser().subscribe(
      (response: any[]) => {
        localStorage.clear();
        this.router.navigate(['/login']);
        this.showSuccess();
        console.log(response);
      },
      (error) => {
        console.error('Logout failed:', error);
      }
    );
  }

  showSuccess() {
    this.toaster.success('You have logged out successfully.', 'Thank you please visit again!');
  }

}
