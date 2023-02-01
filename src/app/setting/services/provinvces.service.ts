import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinvcesService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'true' }) };
  
  constructor(private http: HttpClient) { }
  addProvinvces(data: any) {
    return this.http.post('https://mvp.herokuapp.com/api' + '/provinvces', data).toPromise()
  };
  getProvinvces() {
    return this.http.get('https://mvp.herokuapp.com/api' + '/provinvces').toPromise()
  };
  getProvinvcesById(id: any) {
    return this.http.get(`https://mvp.herokuapp.com/api/provinvces/${id}`).toPromise();
  };
  updateProvinvces(id: any,data:any) {
    return this.http.put(`https://mvp.herokuapp.com/api/provinvces/${id}`,data).toPromise();
  };
  deleteProvinvces(id: any) {
    return this.http.delete(`https://mvp.herokuapp.com/api/provinvces/${id}`).toPromise();
  };

}

