import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LeaveService} from "../../../service/leave.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee-leave',
  templateUrl: './employee-leave.component.html',
  styleUrls: ['./employee-leave.component.scss']
})
export class EmployeeLeaveComponent implements OnInit {

  leaves: any[] = [];
  roleBoolean: boolean=false;

  constructor(public router: Router, public leaveService: LeaveService, public toaster: ToastrService) {
  }

  convertDate(inputDate: string): string {
    const dateTime = new Date(inputDate);
    const day = dateTime.getDate().toString().padStart(2, '0');
    const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
    const year = dateTime.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }

  onAdd() {
    this.router.navigate(['/user/leave/-1']);
  }

  ngOnInit(): void {
    let item = localStorage.getItem("organization");
    if (item == "2") {
      this.roleBoolean = false;
    } else {
      this.roleBoolean = true;
    }
    this.showEmployeeList();
  }

  showEmployeeList() {
    this.leaveService.getAllLeaves().subscribe(
      (response: any[]) => {
        this.leaves = response;
        console.log(this.leaves);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteUser(id: number) {
    this.leaveService.deleteUser(id).subscribe(
      () => {
        this.showSuccess();
        this.showEmployeeList();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  goToEdit(id: number) {
    this.router.navigate([`/user/leave/${id}`]);
  }

  showSuccess() {
    this.toaster.success('Success! Employee leave deleted successfully.!', 'Waw!');
  }
}
