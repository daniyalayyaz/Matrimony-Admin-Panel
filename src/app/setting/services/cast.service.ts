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
    return this.http.post('https://mvp.herokuapp.com' + '/cast', data).toPromise()
  };
  getCast() {
    return this.http.get('https://mvp.herokuapp.com' + '/cast').toPromise()
  };
  getCastById(id: any) {
    return this.http.get(`${'https://mvp.herokuapp.com'}/cast/${id}`).toPromise();
  };
  updateCast(id: any,data:any) {
    return this.http.put(`${'https://mvp.herokuapp.com'}/cast/${id}`,data).toPromise();
  };
  deleteCast(id: any) {
    return this.http.delete(`${'https://mvp.herokuapp.com'}/cast/${id}`).toPromise();
  };

}
