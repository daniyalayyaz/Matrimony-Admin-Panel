import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'true' }) };
  
  constructor(private http: HttpClient) { }
  addCountry(data: any) {
    return this.http.post(environment.apiBaseUrl + '/country', data).toPromise()
  };
  getCountry() {
    return this.http.get(environment.apiBaseUrl + '/country').toPromise()
  };
  getCountryById(id: any) {
    return this.http.get(`${environment.apiBaseUrl}/country/${id}`).toPromise();
  };
  updateCountry(id: any,data:any) {
    return this.http.put(`${environment.apiBaseUrl}/country/${id}`,data).toPromise();
  };
  deleteCountry(id: any) {
    return this.http.delete(`${environment.apiBaseUrl}/country/${id}`).toPromise();
  };

}
