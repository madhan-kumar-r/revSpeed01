import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusinessPlansService {
  // private baseUrl = 'http://localhost:3000/business_plans';
  private baseUrl = 'http://localhost:8080/api/v1/auth/business-plans';

  constructor(private _http: HttpClient) {}

  addBusinessPlansList(data: any): Observable<any> {
    return this._http.post(this.baseUrl, data);
  }

  getBusinessPlansList(): Observable<any> {
    return this._http.get(this.baseUrl);
  }

  updateBusinessPlansList(id: number, data: any): Observable<any> {
    return this._http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteBusinessPlan(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/${id}`);
  }
}
