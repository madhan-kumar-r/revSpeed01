import { HttpClient } from '@angular/common/http';

import { BasicPlanService } from './basic-plan.service';
import { i_plans,b_plans } from '../../../card';
import { Iuser } from '../../user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { RechargeDialogComponent } from '../recharge-dialog/recharge-dialog.component';

@Component({
  selector: 'app-basic-plan',
  templateUrl: './basic-plan.component (1).html',
  styleUrls: ['./basic-plan.component (1).css']
})
export class BasicPlanComponent implements OnInit {
  updatedUser: Iuser | undefined;
  userProfile: Iuser | undefined;
  plans: i_plans[] = [];
  bplans: b_plans[] = [];
  selectedType: string = 'individual';
  initialview:boolean=true;

  constructor(private basicPlanService: BasicPlanService, private snackBar: MatSnackBar, public dialog: MatDialog,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchData();
    const id: number = 1;
    this.basicPlanService.getUserProfile(id).subscribe(data => {
      this.userProfile = data;
      console.log(this.userProfile?.plan_id);
    });
  }

  selectType(type: string): void {
    if (type === 'individual') {
      this.basicPlanService.getIndividualPlans().subscribe((plans) => {
        this.plans = plans;
      });
    } else if (type === 'business') {
      this.basicPlanService.getBusinessPlans().subscribe((bplans) => {
        this.bplans = bplans;
        this.initialview=false;
        console.log("Business plans:", this.bplans);
      });
    }
  }

  getFilteredPlans(): any[] {
    return this.selectedType === 'individual' ? this.plans : this.bplans;
  }

  fetchData(): void {
    this.selectType('individual'); // Default to individual plans
  }

  recharge(id: number, type: string): void {
    debugger
    console.log(type);

    if (this.userProfile) {
      this.basicPlanService.rereq(id, type, this.userProfile).subscribe(
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

  blurBackground: boolean = false;
  isRechargeDialogOpen: boolean = false;

  openRechargeDialog(plan: any): void {
    // Set the flag to blur the background
    debugger
    this.blurBackground = true;

    // Open the MatDialog with the plan data
    const dialogRef = this.dialog.open(RechargeDialogComponent, {
      width: '400px',
      data: { plan }  // Pass the selected plan to the dialog
    });

    // Handle the dialog closing
    dialogRef.afterClosed().subscribe(result => {
      // Reset the background blur flag
      this.blurBackground = false;
      debugger

      if (result === 'confirmed') {
        // Call the recharge method if confirmed
        this.recharge(plan.id, this.selectedType);
      }
    });
  }
}
  


  




