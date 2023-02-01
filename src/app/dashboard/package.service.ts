import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  
  constructor(private http: HttpClient) { }
  addPackage(data: any) {
    return this.http.post('https://mvp.herokuapp.com/api' + '/user/addToPackage', data).toPromise()
  };
  getPackage() {
    return this.http.get('https://mvp.herokuapp.com/api' + '/user/getPackage').toPromise()
  };
  addPromotion(data: any) {
    return this.http.post('https://mvp.herokuapp.com/api' + '/admin/promotionAdd', data).toPromise()
  };
  getPromotion() {
    return this.http.get('https://mvp.herokuapp.com/api' + '/admin/promotionget').toPromise()
  };
  getPromotionById(id: any) {
    return this.http.get(`https://mvp.herokuapp.com/api/admin/getPromotionById/${id}`).toPromise();
  };
  updatePromotion(id: any,data:any) {
    return this.http.post(`https://mvp.herokuapp.com/api/admin/promotionUpdate/${id}`,data).toPromise();
  };
  getPackageById(id: any) {
    return this.http.get(`https://mvp.herokuapp.com/api/user/getPackageById/${id}`).toPromise();
  };
  updatePackage(id: any,data:any) {
    return this.http.post(`https://mvp.herokuapp.com/api/user/packageUpdate/${id}`,data).toPromise();
  };
  deletePackage(id: any) {
    return this.http.delete(`https://mvp.herokuapp.com/api/user/deletePackage/${id}`).toPromise();
  };
  deletePromotion(id: any) {
    return this.http.delete(`https://mvp.herokuapp.com/api/admin/deletePromotion/${id}`).toPromise();
  };

  notificationAdd(reciverId:any,data:any,view:any,description:any){
    const url = `https://mvp.herokuapp.com/api/nothicationAdd/${reciverId}`;
    return this.http.post(url,{data,view,description});
  }
  
}