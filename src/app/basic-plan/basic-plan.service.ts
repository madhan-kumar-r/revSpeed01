import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap ,of} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { b_plans, i_plans } from '../../../card';
import { Iuser } from '../../user';

@Injectable({
  providedIn: 'root'
})
export class BasicPlanService {
  private url='http://localhost:3000/customer_data';
  private individualPlansUrl = 'http://localhost:3000/broadband_plans';
  private businessPlansUrl = 'http://localhost:3000/business_plans';

  constructor(private http: HttpClient,private snackBar: MatSnackBar) { }

  selectedPlans: any[] = [];

  getIndividualPlans(): Observable<i_plans[]> {
    return this.http.get<i_plans[]>(this.individualPlansUrl);
  }

  getBusinessPlans(): Observable<b_plans[]> {
    
    
    return this.http.get<b_plans[]>(this.businessPlansUrl);
  }
  getUserProfile(id:number):Observable<Iuser> {
    console.log(`Fetching user profile for ID: ${id}`);
    const urlid=`${this.url}/${id}`;
  return this.http.get<Iuser>(urlid);
  }
  rereq(id: number, type: string, user: Iuser): Observable<Iuser> {
    console.log(user.plan_id);

    user.plan_id = id;
    user.plan_type = type;

    console.log(user.plan_type);
    return this.http.put<Iuser>(this.url, user).pipe(
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

