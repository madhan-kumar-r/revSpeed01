import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  private baseUrl = ' http://localhost:3000/broadband_plans';

  constructor(private _http: HttpClient) {}

  getPlans(): Observable<any> {
    return this._http.get(this.baseUrl);
  }

  addPlan(data: any): Observable<any> {
    return this._http.post(`${this.baseUrl}`, data);
  }

  updatePlan(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/broadband_plans/${id}`, data);
  }

  deletePlan(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/broadband_plans/${id}`);
  }
}
