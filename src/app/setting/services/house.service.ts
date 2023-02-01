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
    return this.http.post('https://mvp.herokuapp.com/api' + '/house', data).toPromise()
  };
  getHouse() {
    return this.http.get('https://mvp.herokuapp.com/api' + '/house').toPromise()
  };
  getHouseById(id: any) {
    return this.http.get(`https://mvp.herokuapp.com/api/house/${id}`).toPromise();
  };
  updateHouse(id: any,data:any) {
    return this.http.put(`https://mvp.herokuapp.com/api/house/${id}`,data).toPromise();
  };
  deleteHouse(id: any) {
    return this.http.delete(`https://mvp.herokuapp.com/api/house/${id}`).toPromise();
  };

}
