import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  
  private apiUrl = 'http://localhost:8080/api/v1/auth/register';
  private apiUrll = 'http://localhost:8080/api/v1/auth/newregister';
  private apiUrlll = 'http://localhost:8080/api/v1/auth/verify-account';
  private apiUrllll = 'http://localhost:8080/api/v1/auth/change-password';


  constructor(private http: HttpClient) {}

  registerStudent(student: any): Observable<any> {
    console.log(student);
    return this.http.post<any>(this.apiUrl, student);
  }
  registerUser(student: any): Observable<any> {
    console.log(student);
    return this.http.post<any>(this.apiUrll, student);
  }
  registerPass(student: any): Observable<any> {
    console.log(student);
    return this.http.post<any>(this.apiUrlll, student);
  }

  registerSet(student: any): Observable<any> {
    console.log(student);
    return this.http.post<any>(this.apiUrllll, student);
  }


}
