import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeComponent } from './home/home.component';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private isAdminn: boolean = false;

  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/products';

  // Simulate login
  public login(username: string, password: string): boolean {
    // Your authentication logic here
    // For example, check credentials and set isAuthenticated and isAdmin accordingly
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.isAdminn = true;
      return true;
    } else if (username === 'user' && password === 'user') {
      this.isAuthenticated = true;
      this.isAdminn = false;
      return true;
    } else {
      return false;
    }
  }

  public isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  public isAdmin(): boolean {
    return this.isAdminn; // Corrected property name
  }

  public isUser(): boolean {
    return this.isAuthenticated && !this.isAdminn; // Corrected property name
  }

  public clear(): void {
    this.isAuthenticated = false;
    this.isAdminn = false; // Corrected property name
  }
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
}
