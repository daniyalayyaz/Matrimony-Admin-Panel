import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  
  constructor(private http: HttpClient) { }
  addPackage(data: any) {
    return this.http.post('https://mvp.herokuapp.com' + '/user/addToPackage', data).toPromise()
  };
  getPackage() {
    return this.http.get('https://mvp.herokuapp.com' + '/user/getPackage').toPromise()
  };
  addPromotion(data: any) {
    return this.http.post('https://mvp.herokuapp.com' + '/admin/promotionAdd', data).toPromise()
  };
  getPromotion() {
    return this.http.get('https://mvp.herokuapp.com' + '/admin/promotionget').toPromise()
  };
  getPromotionById(id: any) {
    return this.http.get(`${'https://mvp.herokuapp.com'}/admin/getPromotionById/${id}`).toPromise();
  };
  updatePromotion(id: any,data:any) {
    return this.http.post(`${'https://mvp.herokuapp.com'}/admin/promotionUpdate/${id}`,data).toPromise();
  };
  getPackageById(id: any) {
    return this.http.get(`${'https://mvp.herokuapp.com'}/user/getPackageById/${id}`).toPromise();
  };
  updatePackage(id: any,data:any) {
    return this.http.post(`${'https://mvp.herokuapp.com'}/user/packageUpdate/${id}`,data).toPromise();
  };
  deletePackage(id: any) {
    return this.http.delete(`${'https://mvp.herokuapp.com'}/user/deletePackage/${id}`).toPromise();
  };
  deletePromotion(id: any) {
    return this.http.delete(`${'https://mvp.herokuapp.com'}/admin/deletePromotion/${id}`).toPromise();
  };

  notificationAdd(reciverId:any,data:any,view:any,description:any){
    const url = `${'https://mvp.herokuapp.com'}/nothicationAdd/${reciverId}`;
    return this.http.post(url,{data,view,description});
  }
  
}