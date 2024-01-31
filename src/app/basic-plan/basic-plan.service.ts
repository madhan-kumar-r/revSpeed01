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
    
    console.log('Start of rechargePlan method');
  
  // Check if the user already has a home plan or business plan
  if (userProfile.home_plan_id || userProfile.business_plan_id) {
    // Display a pop-up or show a message indicating that a plan already exists
    console.log('User already has a plan');
    this.snackBar.open('You already have an existing plan.', 'Close', {
      duration: 3000,
    });

    // You might want to return an Observable with an error or handle it accordingly
    return new Observable<Iuser>(); // Or throw an error, handle it based on your use case
  }

  console.log('User does not have an existing plan, proceeding with recharge logic');

    // console.log(body);
    let updatedUserProfile: any;

  if (selectedPlan.planType === 'individual') {
    updatedUserProfile = {
      firstname: userProfile.firstname,
      lastname: userProfile.lastname,
      email: userProfile.email,
      password: userProfile.password,
      phone: userProfile.phone,
      address: userProfile.address,
      role: userProfile.role,
      homePlans: {
        id: selectedPlan.id,
        billingCycle: selectedPlan.billingCycle,
        planName: selectedPlan.planName,
        planSpeed: selectedPlan.planSpeed,
        planPrice: selectedPlan.planPrice,
        planType: selectedPlan.planType,
        planData: selectedPlan.planData,
        ott_benefit_1: selectedPlan.ott_benefit_1,
        ott_benefit_2: selectedPlan.ott_benefit_2
      }
    };
  } else if (selectedPlan.planType === 'business') {
    updatedUserProfile = {
      firstname: userProfile.firstname,
      lastname: userProfile.lastname,
      email: userProfile.email,
      password: userProfile.password,
      phone: userProfile.phone,
      address: userProfile.address,
      role: userProfile.role,
      businessPlans: {
        id: selectedPlan.id,
        // Add other properties specific to business plans
      }
    };
  }

  console.log(updatedUserProfile);

    

    return this.http.put<Iuser>(url, updatedUserProfile);
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
