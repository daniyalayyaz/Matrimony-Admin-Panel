import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MotherLanguageService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'true' }) };
  
  constructor(private http: HttpClient) { }
  addMotherLanguage(data: any) {
    return this.http.post('https://mvp.herokuapp.com' + '/motherLanguage', data).toPromise()
  };
  getMotherLanguage() {
    return this.http.get('https://mvp.herokuapp.com' + '/motherLanguage').toPromise()
  };
  getMotherLanguageById(id: any) {
    return this.http.get(`${'https://mvp.herokuapp.com'}/motherLanguage/${id}`).toPromise();
  };
  updateMotherLanguage(id: any,data:any) {
    return this.http.put(`${'https://mvp.herokuapp.com'}/motherLanguage/${id}`,data).toPromise();
  };
  deleteMotherLanguage(id: any) {
    return this.http.delete(`${'https://mvp.herokuapp.com'}/motherLanguage/${id}`).toPromise();
  };

}
