import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReligionService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'true' }) };
  
  constructor(private http: HttpClient) { }
  addReligion(data: any) {
    return this.http.post(environment.apiBaseUrl + '/religion', data).toPromise()
  };
  getReligion() {
    return this.http.get(environment.apiBaseUrl + '/religion').toPromise()
  };
  getReligionById(id: any) {
    return this.http.get(`${environment.apiBaseUrl}/religion/${id}`).toPromise();
  };
  updateReligion(id: any,data:any) {
    return this.http.put(`${environment.apiBaseUrl}/religion/${id}`,data).toPromise();
  };
  deleteReligion(id: any) {
    return this.http.delete(`${environment.apiBaseUrl}/religion/${id}`).toPromise();
  };

}
