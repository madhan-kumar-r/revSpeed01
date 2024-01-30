import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // private baseUrl = ' http://localhost:3000/customer_data';

  private baseUrl = ' http://localhost:8080/api/v1/auth/udetails';
  constructor(private _http: HttpClient) {}

  getUsers(): Observable<any> {
    return this._http.get(this.baseUrl);
  }
}
