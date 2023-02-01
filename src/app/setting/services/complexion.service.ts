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
    return this.http.post('https://mvp.herokuapp.com/api' + '/complexion', data).toPromise()
  };
  getComplexion() {
    return this.http.get('https://mvp.herokuapp.com/api' + '/complexion').toPromise()
  };
  getComplexionById(id: any) {
    return this.http.get(`https://mvp.herokuapp.com/api/complexion/${id}`).toPromise();
  };
  updateComplexion(id: any,data:any) {
    return this.http.put(`https://mvp.herokuapp.com/api/complexion/${id}`,data).toPromise();
  };
  deleteComplexion(id: any) {
    return this.http.delete(`https://mvp.herokuapp.com/api/complexion/${id}`).toPromise();
  };

}
