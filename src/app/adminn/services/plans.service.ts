import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  // private baseUrl = 'http://localhost:3000/broadband_plans';

  private baseUrl = 'http://localhost:8080/api/v1/auth/home-plans';

  constructor(private _http: HttpClient) {}

  getPlans(): Observable<any> {
    return this._http.get(this.baseUrl);
  }

  addPlan(data: any): Observable<any> {
    return this._http.post(this.baseUrl, data);
  }

  updatePlan(id: number, data: any): Observable<any> {
    return this._http.put(`${this.baseUrl}/${id}`, data);
  }

  deletePlan(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/${id}`);
  }
}
