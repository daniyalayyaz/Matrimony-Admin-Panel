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
    return this.http.post(environment.apiBaseUrl + '/motherLanguage', data).toPromise()
  };
  getMotherLanguage() {
    return this.http.get(environment.apiBaseUrl + '/motherLanguage').toPromise()
  };
  getMotherLanguageById(id: any) {
    return this.http.get(`${environment.apiBaseUrl}/motherLanguage/${id}`).toPromise();
  };
  updateMotherLanguage(id: any,data:any) {
    return this.http.put(`${environment.apiBaseUrl}/motherLanguage/${id}`,data).toPromise();
  };
  deleteMotherLanguage(id: any) {
    return this.http.delete(`${environment.apiBaseUrl}/motherLanguage/${id}`).toPromise();
  };

}
