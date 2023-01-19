import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LooksService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'true' }) };
  
  constructor(private http: HttpClient) { }
  addLooks(data: any) {
    return this.http.post(environment.apiBaseUrl + '/looks', data).toPromise()
  };
  getLooks() {
    return this.http.get(environment.apiBaseUrl + '/looks').toPromise()
  };
  getLooksById(id: any) {
    return this.http.get(`${environment.apiBaseUrl}/looks/${id}`).toPromise();
  };
  updateLooks(id: any,data:any) {
    return this.http.put(`${environment.apiBaseUrl}/looks/${id}`,data).toPromise();
  };
  deleteLooks(id: any) {
    return this.http.delete(`${environment.apiBaseUrl}/looks/${id}`).toPromise();
  };

}
