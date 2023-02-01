import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'true' }) };
  
  constructor(private http: HttpClient) { }
  addBuild(data: any) {
    return this.http.post('https://mvp.herokuapp.com/api' + '/build', data).toPromise()
  };
  getBuild() {
    return this.http.get('https://mvp.herokuapp.com/api' + '/build').toPromise()
  };
  getBuildById(id: any) {
    return this.http.get(`https://mvp.herokuapp.com/api/build/${id}`).toPromise();
  };
  updateBuild(id: any,data:any) {
    return this.http.put(`https://mvp.herokuapp.com/api/build/${id}`,data).toPromise();
  };
  deleteBuild(id: any) {
    return this.http.delete(`https://mvp.herokuapp.com/api/build/${id}`).toPromise();
  };

}
