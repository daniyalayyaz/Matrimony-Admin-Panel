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
    return this.http.post('https://mvp.herokuapp.com/api' + '/sect', data).toPromise()
  };
  getSect() {
    return this.http.get('https://mvp.herokuapp.com/api' + '/sect').toPromise()
  };
  getSectById(id: any) {
    return this.http.get(`https://mvp.herokuapp.com/api/sect/${id}`).toPromise();
  };
  updateSect(id: any,data:any) {
    return this.http.put(`https://mvp.herokuapp.com/api/sect/${id}`,data).toPromise();
  };
  deleteSect(id: any) {
    return this.http.delete(`https://mvp.herokuapp.com/api/sect/${id}`).toPromise();
  };

}
