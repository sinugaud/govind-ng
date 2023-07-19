import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LeaveService} from "../../../service/leave.service";
import {ToastrService} from "ngx-toastr";
import {DocumentService} from "../../../service/document.service";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  documents: any[] = [];

  constructor(private router: Router, private toaster: ToastrService,
              private documentService: DocumentService) {
  }

  ngOnInit(): void {
    this.getAllDocuments();
  }

  onAdd() {
    this.router.navigate(['/user/addDocument']);
  }

  private getAllDocuments() {
    this.documentService.getAllDocuments().subscribe(
      (response: any[]) => {
        this.documents = response;
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  downloadFile(fileName: any) {
    this.documentService.downloadFile(fileName).subscribe(
      (data) => {
        const downloadUrl = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = fileName;
        link.click();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteUser(id: any) {
    this.documentService.deleteFileAndInfo(id).subscribe(
      (resource: any) => {
        this.showSuccess();
        this.getAllDocuments();
        console.log(resource);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  showSuccess() {
    this.toaster.success('Success! Document deleted successfully.!', 'Waw!');
  }
}
