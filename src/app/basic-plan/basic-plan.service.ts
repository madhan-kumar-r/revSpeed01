import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { b_plans, i_plans } from '../../../card';
import { users } from '../../../users';

@Injectable({
  providedIn: 'root'
})
export class BasicPlanService {
  private baseUrl = 'http://localhost:3000';
  private customerDataUrl = `${this.baseUrl}/customer_data`;
  private individualPlansUrl = `${this.baseUrl}/home_plans`;
  private businessPlansUrl = `${this.baseUrl}/business_plans`;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  selectedPlans: any[] = [];

  getIndividualPlans(): Observable<i_plans[]> {
    return this.http.get<i_plans[]>(this.individualPlansUrl);
  }

  getBusinessPlans(): Observable<b_plans[]> {
    return this.http.get<b_plans[]>(this.businessPlansUrl);
  }

  getUserProfile(id: number): Observable<users> {
    const url = `${this.baseUrl}/customer_data/${id}`;
    return this.http.get<users>(url);
  }

  rereq(id: number, type: string, user: any): Observable<users> {
    if (type === 'individual') {
      user.home_plan_id = id;
      user.business_plan_id = 0; // Set business_plan_id to 0 for individual plan
    } else if (type === 'business') {
      user.business_plan_id = id;
      user.home_plan_id = 0; // Set home_plan_id to 0 for business plan
    }

    const url = `${this.baseUrl}/customer_data/${user.id}`;

    return this.http.put<users>(url, user).pipe(
      catchError(error => {
        console.error('error adding plan failed', error);

        // Show error message using MatSnackBar
        this.snackBar.open('Error adding plan', 'Close', {
          duration: 3000,
        });

        throw error;
      })
    );
  }
}
