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
    return this.http.post('https://mvp.herokuapp.com' + '/religion', data).toPromise()
  };
  getReligion() {
    return this.http.get('https://mvp.herokuapp.com' + '/religion').toPromise()
  };
  getReligionById(id: any) {
    return this.http.get(`${'https://mvp.herokuapp.com'}/religion/${id}`).toPromise();
  };
  updateReligion(id: any,data:any) {
    return this.http.put(`${'https://mvp.herokuapp.com'}/religion/${id}`,data).toPromise();
  };
  deleteReligion(id: any) {
    return this.http.delete(`${'https://mvp.herokuapp.com'}/religion/${id}`).toPromise();
  };

}
