import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'true' }) };
  
  constructor(private http: HttpClient) { }
  addHouse(data: any) {
    return this.http.post(environment.apiBaseUrl + '/house', data).toPromise()
  };
  getHouse() {
    return this.http.get(environment.apiBaseUrl + '/house').toPromise()
  };
  getHouseById(id: any) {
    return this.http.get(`${environment.apiBaseUrl}/house/${id}`).toPromise();
  };
  updateHouse(id: any,data:any) {
    return this.http.put(`${environment.apiBaseUrl}/house/${id}`,data).toPromise();
  };
  deleteHouse(id: any) {
    return this.http.delete(`${environment.apiBaseUrl}/house/${id}`).toPromise();
  };

}
