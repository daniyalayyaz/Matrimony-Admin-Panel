import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'true' }) };
  
  constructor(private http: HttpClient) { }
  addCast(data: any) {
    return this.http.post(environment.apiBaseUrl + '/cast', data).toPromise()
  };
  getCast() {
    return this.http.get(environment.apiBaseUrl + '/cast').toPromise()
  };
  getCastById(id: any) {
    return this.http.get(`${environment.apiBaseUrl}/cast/${id}`).toPromise();
  };
  updateCast(id: any,data:any) {
    return this.http.put(`${environment.apiBaseUrl}/cast/${id}`,data).toPromise();
  };
  deleteCast(id: any) {
    return this.http.delete(`${environment.apiBaseUrl}/cast/${id}`).toPromise();
  };

}
