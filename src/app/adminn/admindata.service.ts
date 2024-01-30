import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './Admin';

@Injectable({
  providedIn: 'root',
})
export class AdmindataService {
  url = 'http://localhost:8080/api/v1/auth/udetails';
  constructor(private http: HttpClient) {}

  getUserProfile(email: string): Observable<Admin> {
    const urlid = `${this.url}/${email}`;
    console.log(urlid);

    return this.http.get<Admin>(urlid);
  }
}
