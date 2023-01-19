import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComplexionService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'true' }) };
  
  constructor(private http: HttpClient) { }
  addComplexion(data: any) {
    return this.http.post(environment.apiBaseUrl + '/complexion', data).toPromise()
  };
  getComplexion() {
    return this.http.get(environment.apiBaseUrl + '/complexion').toPromise()
  };
  getComplexionById(id: any) {
    return this.http.get(`${environment.apiBaseUrl}/complexion/${id}`).toPromise();
  };
  updateComplexion(id: any,data:any) {
    return this.http.put(`${environment.apiBaseUrl}/complexion/${id}`,data).toPromise();
  };
  deleteComplexion(id: any) {
    return this.http.delete(`${environment.apiBaseUrl}/complexion/${id}`).toPromise();
  };

}
