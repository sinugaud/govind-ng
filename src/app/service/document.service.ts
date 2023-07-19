import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DocumentService {

  constructor(public http: HttpClient) {
  }

  addDocument(reqBody:any, file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('name', reqBody.name);
    formData.append('role', reqBody.role);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    });
    const options = {headers};
    // @ts-ignore
    return this.http.post<any[]>('http://localhost:8085/user/addDocument', formData, options);
  }

  getAllDocuments() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
    });
    const options = {headers};
    return this.http.get<any[]>('http://localhost:8085/user/findDocuments', options);
  }

  downloadFile(fileName: any) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
    });
    const options = { headers, responseType: 'blob' as 'json' };
    return this.http.get<Blob>(`http://localhost:8085/user/downloadFile/${fileName}`, options);
  }

  deleteFileAndInfo(id: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    });
    const options = {headers};
    const url = `http://localhost:8085/user/deleteDocument/${id}`;
    return this.http.delete<any[]>(url, options);
  }
}
