// import { Injectable } from '@angular/core';
// import { User } from '../model/user.interface';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {


//   private apiUrl = 'http://localhost:8080/api/v1/auth/authenticate';

//   constructor(private http: HttpClient) {}

//   registerStudent(student: User): Observable<User> {
//     return this.http.post<User>(this.apiUrl, student);
//   }
// }
// auth-interceptor.service.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token'); // Assuming you store the token in local storage

    if (token) {
      // Clone the request and add the token as an Authorization header
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      return next.handle(modifiedRequest);
    }

    // If no token, proceed with the original request
    return next.handle(request);
  }
}
