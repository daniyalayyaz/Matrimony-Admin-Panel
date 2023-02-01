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
    const url = `https://mvp.herokuapp.com/api/subAdmin/subAdminCreate`;
    return this.http.post(url, body);
  }
  getSubAdminList() {
    return this.http.get('https://mvp.herokuapp.com/api' + '/subAdmin/showSubAdmin').toPromise()
  };
  getSubAdminById(id: any) {
    return this.http.get(`https://mvp.herokuapp.com/api/subAdmin/subAdminById/${id}`).toPromise();
  }
  getSubAdminByName(userName:any,password:any) {
    return this.http.post(`https://mvp.herokuapp.com/api/subAdmin/subAdminByName/${userName}`,{password});
  }
  updateSubAdmin(id:any,body:any){
    return this.http.put(`https://mvp.herokuapp.com/api/subAdmin/updatesubAdmin/${id}`,body).toPromise();
  }
  deleteSubAdmin(id:any){
    return this.http.delete(`https://mvp.herokuapp.com/api/subAdmin/deleteSubAdmin/${id}`).toPromise();
  }
}