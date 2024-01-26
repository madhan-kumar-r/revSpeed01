import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusinessPlansService {
  constructor(private _http: HttpClient) {}

  addBusinessPlansList(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/business_plans', data);
  }

  getBusinessPlansList(): Observable<any> {
    return this._http.get('http://localhost:3000/business_plans');
  }

  updateBusinessPlansList(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/business_plans/${id}`, data);
  }

  deleteBusinessPlan(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/business_plans/${id}`);
  }
}
