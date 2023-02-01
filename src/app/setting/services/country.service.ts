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
    return this.http.post('https://mvp.herokuapp.com/api' + '/country', data).toPromise()
  };
  getCountry() {
    return this.http.get('https://mvp.herokuapp.com/api' + '/country').toPromise()
  };
  getCountryById(id: any) {
    return this.http.get(`https://mvp.herokuapp.com/api/country/${id}`).toPromise();
  };
  updateCountry(id: any,data:any) {
    return this.http.put(`https://mvp.herokuapp.com/api/country/${id}`,data).toPromise();
  };
  deleteCountry(id: any) {
    return this.http.delete(`https://mvp.herokuapp.com/api/country/${id}`).toPromise();
  };

}
