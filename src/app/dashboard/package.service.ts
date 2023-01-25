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
  getPromotionById(id: any) {
    return this.http.get(`${environment.apiBaseUrl}/admin/getPromotionById/${id}`).toPromise();
  };
  updatePromotion(id: any,data:any) {
    return this.http.post(`${environment.apiBaseUrl}/admin/promotionUpdate/${id}`,data).toPromise();
  };
  getPackageById(id: any) {
    return this.http.get(`${environment.apiBaseUrl}/user/getPackageById/${id}`).toPromise();
  };
  updatePackage(id: any,data:any) {
    return this.http.post(`${environment.apiBaseUrl}/user/packageUpdate/${id}`,data).toPromise();
  };
  deletePackage(id: any) {
    return this.http.delete(`${environment.apiBaseUrl}/user/deletePackage/${id}`).toPromise();
  };
  deletePromotion(id: any) {
    return this.http.delete(`${environment.apiBaseUrl}/admin/deletePromotion/${id}`).toPromise();
  };

}