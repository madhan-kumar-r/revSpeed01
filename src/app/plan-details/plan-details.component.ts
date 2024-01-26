import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PlanDetailsService } from './plan-details.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Iuser } from '../../user';
import { i_plans,b_plans } from '../../../card';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrl: './plan-details.component.css'
})
export class PlanDetailsComponent implements OnDestroy{
  plan: any;
  isVisible: boolean = false;
  
  updatedUser: Iuser | undefined;
  userProfile: Iuser | undefined;
  plans: i_plans[] = [];
  bplans: b_plans[] = [];
  selectedType: string = 'individual';
initialview:boolean=true;


constructor(private planDetailsService:PlanDetailsService, http: HttpClient,private snackBar: MatSnackBar, private subscription : Subscription) {}

ngOnInit() {
  this.subscription = this.planDetailsService.planDetailsVisibility$.subscribe(
    isVisible => this.isVisible = isVisible
  );
  this.planDetailsService.selectedPlan$.subscribe(
    plan => this.plan = plan
  );
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}

recharge(id: number, type: string) : void {
  console.log(type);

  if (this.userProfile) {
    this.planDetailsService.rereq(id, type, this.userProfile).subscribe(
      updatedUserData => {
        this.updatedUser = updatedUserData;
        console.log('User profile updated:', updatedUserData);

        // Show success message
        this.snackBar.open('Recharge successful', 'Close', {
          duration: 3000,  // Duration in milliseconds
        });
      },
      error => {
        console.error('updated', error);

        // Show error message
        this.snackBar.open('Recharge failed', 'Close', {
          duration: 3000,
        });
      }
    );
  }
  
}

closeDetails() {
  this.planDetailsService.hidePlanDetails();
}
  
  
}
