import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  
  constructor(private http: HttpClient) { }
  addPackage(data: any) {
    return this.http.post(environment.apiBaseUrl + '/user/addToPackage', data).toPromise()
  };
  getPackage() {
    return this.http.get(environment.apiBaseUrl + '/user/getPackage').toPromise()
  };
  addPromotion(data: any) {
    return this.http.post(environment.apiBaseUrl + '/admin/promotionAdd', data).toPromise()
  };
  getPromotion() {
    return this.http.get(environment.apiBaseUrl + '/admin/promotionget').toPromise()
  };
  // getPackageById(id: any) {
  //   return this.http.get(`${environment.apiBaseUrl}/package/${id}`).toPromise();
  // };
  // updatePackage(id: any,data:any) {
  //   return this.http.put(`${environment.apiBaseUrl}/package/${id}`,data).toPromise();
  // };
  deletePackage(id: any) {
    return this.http.delete(`${environment.apiBaseUrl}/user/deletePackage/${id}`).toPromise();
  };
  deletePromotion(id: any) {
    return this.http.delete(`${environment.apiBaseUrl}/admin/deletePromotion/${id}`).toPromise();
  };
}