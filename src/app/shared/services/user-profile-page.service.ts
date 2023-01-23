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
    return this.http.post(environment.apiBaseUrl + '/user/createProfile', data).toPromise()
  };
  get() {
    return this.http.get(environment.apiBaseUrl + '/user/getAllProfile').toPromise()
  };
  update(id: any,data:any) {
    return this.http.put(`${environment.apiBaseUrl}/user/updateProfile/${id}`,{active:data}).toPromise();
  };
  updatePackge(id: any,data:any) {
    return this.http.put(`${environment.apiBaseUrl}/user/assignPackageToUser/${id}`,{packageId:data}).toPromise();
  };
  block(id:any){
    return this.http.get(`${environment.apiBaseUrl}/admin/blockuser/${id}`).toPromise();
  };
  delete(id:any){
    return this.http.get(`${environment.apiBaseUrl}/admin/deleteuser/${id}`).toPromise();
  }
  getPackageById(id:any) {
    return this.http.get(`${environment.apiBaseUrl}/user/imageUpload/${id}`)
  }
  getReports(){
    return this.http.get(environment.apiBaseUrl + '/admin/getAllReports').toPromise();
  }
}
