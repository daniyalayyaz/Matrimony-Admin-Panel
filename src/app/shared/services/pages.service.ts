import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PagesService {
  constructor(private http: HttpClient) { }

  subAdminCreate(body: any) {
    const url = `${environment.apiBaseUrl}/subAdmin/subAdminCreate`;
    return this.http.post(url, body);
  }
  getSubAdminList() {
    return this.http.get(environment.apiBaseUrl + '/subAdmin/showSubAdmin').toPromise()
  };
  getSubAdminById(id: any) {
    return this.http.get(`${environment.apiBaseUrl}/subAdmin/subAdminById/${id}`).toPromise();
  }
  getSubAdminByName(userName:any,password:any) {
    return this.http.post(`${environment.apiBaseUrl}/subAdmin/subAdminByName/${userName}`,{password});
  }
  updateSubAdmin(id:any,body:any){
    return this.http.put(`${environment.apiBaseUrl}/subAdmin/updatesubAdmin/${id}`,body).toPromise();
  }
  deleteSubAdmin(id:any){
    return this.http.delete(`${environment.apiBaseUrl}/subAdmin/deleteSubAdmin/${id}`).toPromise();
  }
}