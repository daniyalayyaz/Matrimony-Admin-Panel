import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfilePageService {
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'true' }) };

  constructor(private http: HttpClient) { }
  add(data: any) {
    return this.http.post('https://mvp.herokuapp.com/api' + '/user/createProfile', data).toPromise()
  };
  get() {
    return this.http.get('https://mvp.herokuapp.com/api' + '/user/getAllProfile').toPromise()
  };
  update(id: any,data:any) {
    return this.http.put(`https://mvp.herokuapp.com/api/user/updateProfile/${id}`,{active:data}).toPromise();
  };
  updatePackge(id: any,data:any) {
    return this.http.put(`https://mvp.herokuapp.com/api/user/assignPackageToUser/${id}`,{packageId:data}).toPromise();
  };
  block(id:any){
    return this.http.get(`https://mvp.herokuapp.com/api/admin/blockuser/${id}`).toPromise();
  };
  delete(id:any){
    return this.http.get(`https://mvp.herokuapp.com/api/admin/deleteuser/${id}`).toPromise();
  }
  getPackageById(id:any) {
    return this.http.get(`https://mvp.herokuapp.com/api/user/imageUpload/${id}`)
  }
  getReports(){
    return this.http.get('https://mvp.herokuapp.com/api' + '/admin/getAllReports').toPromise();
  }
}
