import {booleanAttribute, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {LeaveService} from "../../../service/leave.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-employee-leave-add',
  templateUrl: './employee-leave-add.component.html',
  styleUrls: ['./employee-leave-add.component.scss'],
  providers: [DatePipe]
})
export class EmployeeLeaveAddComponent implements OnInit {
  leaveForm: FormGroup = new FormGroup({});
  id: any;
  hideEndDateAndShiftCondition: boolean = false;
  employeeLeave: any = {
    status: '',
    notes: '',
    subject: '',
    reason: '',
    startDateTime: '',
    endDateTime: '',
    startShift: '',
    endShift: '',
    user: {
      firstName: '',
      lastName: ''
    }
  };
  editCondition: boolean = false;
  roleBoolean: boolean = false;
  employeeLeaveList: any = {
    status: '',
    notes: '',
    subject: '',
    reason: '',
    startDateTime: '',
    endDateTime: '',
    startShift: '',
    endShift: '',
    user: {
      firstName: '',
      lastName: ''
    }
  };
  today: string;
  start: string;

  constructor(public leaveService: LeaveService, public datePipe: DatePipe,
              public router: Router, public fb: FormBuilder, public toaster: ToastrService,
              public route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    let item = localStorage.getItem("organization");
    if (item == "2") {
      this.roleBoolean = false;
    } else {
      this.roleBoolean = true;
    }
    this.leaveForm = this.fb.group({
      subject: [''],
      reason: [''],
      startDateTime: ['', Validators.required],
      endDateTime: [''],
      status: [''],
      notes: [''],
      startShift: [''],
      endShift: [''],
    });
    const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0];
    this.start = currentDate.toISOString().split('T')[0];
    this.getEmployeeLeave();
  }


  getEmployeeLeave() {
    if (this.id != null && this.id != "-1") {
      this.leaveService.getLeave(this.id).subscribe(
        (response) => {
          this.employeeLeaveList = response;
          this.employeeLeave.status = this.employeeLeaveList.status;
          this.employeeLeave.notes = this.employeeLeaveList.notes;
          this.employeeLeave.subject = this.employeeLeaveList.subject;
          this.employeeLeave.reason = this.employeeLeaveList.reason;
          this.employeeLeave.startShift = this.employeeLeaveList.startShift;
          this.employeeLeave.endShift = this.employeeLeaveList.endShift;
          this.employeeLeave.user.firstName = this.employeeLeaveList.user.firstName;
          this.employeeLeave.user.lastName = this.employeeLeaveList.user.lastName;
          const convertedDate = this.convertDate(this.employeeLeaveList.startDateTime);
          this.employeeLeave.startDateTime = convertedDate;
          const convertedDate2 = this.convertDate(this.employeeLeaveList.endDateTime);
          this.employeeLeave.endDateTime = convertedDate2;
        },
        (error) => {
          console.error(error);
        }
      );
      this.editCondition = true;
    } else {
      this.editCondition = false;
    }
  }

  convertDate(inputDate: string): string {
    const dateTime = new Date(inputDate);
    const isoDate = dateTime.toISOString().split('T')[0];
    return isoDate;
  }

  backToLeave() {
    this.router.navigate(['/user/leave']);
  }

  onSubmit() {
    if (this.id != null && this.id == "-1") {
      if (this.leaveForm.valid) {
        this.leaveService.addLeave(this.leaveForm.value).subscribe(
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
        this.leaveForm.markAllAsTouched();
      }
    } else {
      if (this.leaveForm.valid) {
        this.leaveService.EditLeave(this.id, this.leaveForm.value).subscribe(
          (response) => {
            this.showSuccess();
            console.log('Leave Edited:', response);
            this.backToLeave();
          },
          (error) => {
            console.error(error);
          }
        );
        this.reset();
      } else {
        this.leaveForm.markAllAsTouched();
      }
    }
  }

  reset() {
    this.leaveForm.reset();
  }

  showSuccess() {
    this.toaster.success('Success! Your request has been processed successfully.!', 'Waw!');
  }

  startShift() {
    const startShiftValue = this.leaveForm.get('startShift')?.value;
    if (startShiftValue == 'Full day' && startShiftValue != null) {
      this.hideEndDateAndShift();
    } else {
      this.showEndDateAndShift();
    }

    if (startShiftValue == 'Second half' && startShiftValue != null) {
      if (this.matchStartAndEndDateTime()) {
        this.leaveForm.get('endShift')?.setValue('Second half');
      }
    }

  }

  hideEndDateAndShift() {
    this.hideEndDateAndShiftCondition = true;
    this.leaveForm.patchValue({
      endDateTime: '',
      endShift: ''
    });
  }

  showEndDateAndShift() {
    this.hideEndDateAndShiftCondition = false;
  }

  matchStartAndEndDateTime() {
    let startDateTimeValue = this.leaveForm.get('startDateTime')?.value;
    let endDateTimeValue = this.leaveForm.get('endDateTime')?.value;
    if (startDateTimeValue == endDateTimeValue && startDateTimeValue != '' && endDateTimeValue != '') {
      return true;
    } else {
      return false;
    }
  }

  startDateTime() {
    const startDateTimeValue = this.leaveForm.get('startDateTime')?.value;
    const endDateTimeValue = this.leaveForm.get('endDateTime')?.value;

    let startDate = new Date(startDateTimeValue);
    let endDate = new Date(endDateTimeValue);
    const currentDate = new Date();

    if (startDate.getTime() < currentDate.getTime()) {
      let s = this.convertDate(currentDate.toISOString());
      this.leaveForm.get('startDateTime')?.setValue(s);
    }
    if (startDate.getTime() > endDate.getTime()) {
      this.leaveForm.get('startDateTime')?.setValue(endDateTimeValue);
    }
    if (this.matchStartAndEndDateTime() && this.leaveForm.get('startShift')?.value == 'Second half') {
      this.leaveForm.get('endShift')?.setValue('Second half');
    }

    if (this.leaveForm.get('startDateTime')?.value) {
      this.start = this.leaveForm.get('startDateTime')?.value;
    } else {
      this.start = currentDate.toISOString().split('T')[0];
    }
  }

  endDateTime() {
    let startDateTimeValue = this.leaveForm.get('startDateTime')?.value;
    let endDateTimeValue = this.leaveForm.get('endDateTime')?.value;
    const startDate = new Date(startDateTimeValue);
    const endDate = new Date(endDateTimeValue);
    if (startDate.getTime() > endDate.getTime()) {
      this.leaveForm.get('endDateTime')?.setValue(startDateTimeValue);
    }
    if (this.matchStartAndEndDateTime() && this.leaveForm.get('startShift')?.value == 'Second half') {
      this.leaveForm.get('endShift')?.setValue('Second half');
    }
  }

  endShift() {
    if (this.matchStartAndEndDateTime() && this.leaveForm.get('startShift')?.value == 'Second half') {
      this.leaveForm.get('endShift')?.setValue('Second half');
    }
  }
}
