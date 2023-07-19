import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DocumentService} from "../../../service/document.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-document-add',
  templateUrl: './document-add.component.html',
  styleUrls: ['./document-add.component.scss']
})
export class DocumentAddComponent {
  documentForm: FormGroup;
  selectedFile: File | undefined;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private documentService: DocumentService, public toaster: ToastrService) {
    this.documentForm = this.formBuilder.group({
        name: ['', Validators.required],
        file: [null, Validators.required],
        role: ['',Validators.required]
      }
    );
  }

  onSubmit() {
    if (this.documentForm.valid && this.selectedFile) {
      this.documentService.addDocument(this.documentForm.value, this.selectedFile).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  backToDocument() {
    this.router.navigate(['/user/document']);
  }


  showSuccess() {
    this.toaster.success('Success! Document added successfully.!', 'Waw!');
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0];
    } else {
      this.selectedFile = undefined;
    }
  }
}
