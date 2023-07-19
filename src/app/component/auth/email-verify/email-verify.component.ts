import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RegisterService} from "../../../service/register.service";

@Component({
  selector: 'app-emailverify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.scss']
})
export class EmailVerifyComponent implements OnInit {
  verificationStatus: string = "Invalid User ID";

  constructor(
    public route: ActivatedRoute,
    public registerService: RegisterService
  ) {
  }

  ngOnInit(): void {
    // Retrieve the user ID from the route parameter
    const userId = this.route.snapshot.paramMap.get('id');

    // Check if the user ID is valid
    if (!isNaN(Number(userId))) {
      this.registerService.verifyUser(userId).subscribe(
        (response: any) => {
          console.log(response);
          this.verificationStatus = response.success;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.verificationStatus = 'Invalid User ID';
    }
  }

}
