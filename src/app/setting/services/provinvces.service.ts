import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinvcesService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'true' }) };
  
  constructor(private http: HttpClient) { }
  addProvinvces(data: any) {
    return this.http.post(environment.apiBaseUrl + '/provinvces', data).toPromise()
  };
  getProvinvces() {
    return this.http.get(environment.apiBaseUrl + '/provinvces').toPromise()
  };
  getProvinvcesById(id: any) {
    return this.http.get(`${environment.apiBaseUrl}/provinvces/${id}`).toPromise();
  };
  updateProvinvces(id: any,data:any) {
    return this.http.put(`${environment.apiBaseUrl}/provinvces/${id}`,data).toPromise();
  };
  deleteProvinvces(id: any) {
    return this.http.delete(`${environment.apiBaseUrl}/provinvces/${id}`).toPromise();
  };

}

