import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { Iuser } from '../../user';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PlanDetailsService {

  constructor(private http: HttpClient,private snackBar: MatSnackBar) { }
  private url='http://localhost:3000/customer_data';
  private planDetailsVisibilitySource = new BehaviorSubject<boolean>(false);
  private selectedPlanSource = new BehaviorSubject<any>(null);

  planDetailsVisibility$ = this.planDetailsVisibilitySource.asObservable();
  selectedPlan$ = this.selectedPlanSource.asObservable();

  showPlanDetails(plan: any) {
    this.selectedPlanSource.next(plan);
    this.planDetailsVisibilitySource.next(true);
  }

  hidePlanDetails() {
    this.planDetailsVisibilitySource.next(false);
  }

  rereq(id: number, type: string, user: any): Observable<Iuser> {
    console.log(user.plan_id);
    const urlid = `${this.url}/1`;

    user.plan_id = id;
    user.plan_type = type;
   
   

    console.log(user.plan_type);
    return this.http.put<Iuser>(urlid, user).pipe(
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
