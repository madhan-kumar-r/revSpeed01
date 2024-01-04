import { Injectable } from '@angular/core';
import { User } from '../model/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private apiUrl = 'http://localhost:8089/save';

  constructor(private http: HttpClient) {}

  registerStudent(student: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, student);
  }
}
