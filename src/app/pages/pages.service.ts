import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class PagesService {
    constructor(private http: HttpClient) { }

    subAdminCreate(body:any) {
        const url = `${environment.apiBaseUrl}/subAdmin/subAdminCreate`;
        return this.http.post(url,body);
      }

}