import { Injectable } from '@angular/core';
import { Iuser } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserPlanComponent } from './app/user-plan/user-plan.component';



@Injectable({
  providedIn: 'root'
})
export class UserPlanService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  getCustomerData(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(`${this.apiUrl}/customer_data`);
  }

  updateCustomerPlan(customerId: number, planId: number, planType: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/customer_data/${customerId}`, {
      plan_id: planId,
      plan_type: planType,
    });
  }



}
