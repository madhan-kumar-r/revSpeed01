import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = ' http://localhost:3000/customer_data';
  constructor(private _http: HttpClient) {}

  getUsers(): Observable<any> {
    return this._http.get('http://localhost:3000/customer_data');
  }
}
