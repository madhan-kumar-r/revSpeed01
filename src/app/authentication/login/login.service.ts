import { Injectable } from '@angular/core';
import { User } from '../../model/user.interface';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  access!:string;

  setacc(access:string)
  {
this.access=access;
  }
  getaccess():string
  {
    return this.access;
  }

  private apiUrl = 'http://localhost:8080/api/v1/auth/authenticate';

  constructor(private http: HttpClient) {}

  registerStudent(student: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, student);
  }
}
