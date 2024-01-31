import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { b_plans, i_plans } from '../../../card';
import { users } from '../../../users';
import { Iuser } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class BasicPlanService {
  private baseUrl = 'http://localhost:8080';
  private customerDataUrl = `${this.baseUrl}/api/v1/auth/udetails`;
  private apiUrl = `${this.baseUrl}/api/v1/auth`;
  
 // Adjust the port if needed
  private individualPlansUrl = `${this.baseUrl}/api/v1/auth/home-plans`;
  private businessPlansUrl = `${this.baseUrl}/api/v1/auth/business-plans`;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  selectedPlans: any[] = [];

  getIndividualPlans(): Observable<i_plans[]> {
    return this.http.get<i_plans[]>(this.individualPlansUrl);
  }

  getBusinessPlans(): Observable<b_plans[]> {
    return this.http.get<b_plans[]>(this.businessPlansUrl);
  }

  getUserProfile(email: String): Observable<Iuser> {
    const url = `${this.customerDataUrl}/${email}`;
    return this.http.get<Iuser>(url);
  }

  rechargePlan(selectedPlan: i_plans | b_plans, userProfile: Iuser): Observable<Iuser> {
    const url = `${this.apiUrl}/upCustomer`; 
    const body = {
      selectedPlan,
      userProfile,
    };
    console.log(body);
    

    return this.http.put<Iuser>(url, body);
  }

  // updateCustomer(data: any): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Authorization': 'Bearer ' + yourAuthToken,
  //     'Content-Type': 'application/json'
  //   });

  //   return this.http.put(this.apiUrl, data, { headers: headers });
  // }

  rereq(id: number, type: string, user: any): Observable<users> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    if (type === 'individual') {
      user.home_plan_id = id;
      user.business_plan_id = 0; // Set business_plan_id to 0 for individual plan
    } else if (type === 'business') {
      user.business_plan_id = id;
      user.home_plan_id = 0; // Set home_plan_id to 0 for business plan
    }

    const url = `${this.customerDataUrl}/${user.id}`;

    return this.http.put<users>(url, user, { headers }).pipe(
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
