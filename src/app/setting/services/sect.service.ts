import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SectService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'true' }) };
  
  constructor(private http: HttpClient) { }
  addSect(data: any) {
    return this.http.post(environment.apiBaseUrl + '/sect', data).toPromise()
  };
  getSect() {
    return this.http.get(environment.apiBaseUrl + '/sect').toPromise()
  };
  getSectById(id: any) {
    return this.http.get(`${environment.apiBaseUrl}/sect/${id}`).toPromise();
  };
  updateSect(id: any,data:any) {
    return this.http.put(`${environment.apiBaseUrl}/sect/${id}`,data).toPromise();
  };
  deleteSect(id: any) {
    return this.http.delete(`${environment.apiBaseUrl}/sect/${id}`).toPromise();
  };

}
