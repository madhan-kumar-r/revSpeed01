import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BasicPlanService } from './basic-plan.service';
import { i_plans,b_plans } from '../../../card';
import { users } from '../../../users';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RechargeDialogComponent } from '../recharge-dialog/recharge-dialog.component';
import { ViewDetailsComponent } from '../view-details/view-details.component';

@Component({
  selector: 'app-basic-plan',
  templateUrl: './basic-plan.component.html',
  styleUrls: ['./basic-plan.component.css']
})
export class BasicPlanComponent implements OnInit {
  updatedUser: users | undefined;
  userProfile: users | undefined;
  plans: i_plans[] = [];
  bplans: b_plans[] = [];
  selectedType: string = 'individual';
  selectedPlan : any;

  constructor(private basicPlanService: BasicPlanService, private snackBar: MatSnackBar, public dialog: MatDialog,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchData();
    const id: number = 1;
    this.basicPlanService.getUserProfile(id).subscribe(data => {
      this.userProfile = data;
      if (this.userProfile?.plan_type === 'business') {
        console.log(this.userProfile?.business_plan_id);
      } else if (this.userProfile?.plan_type === 'individual') {
        console.log(this.userProfile?.home_plan_id);
      }
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
    
    console.log(type);

    if (this.userProfile) {
      // Use the correct plan type when calling rereq method
      const planType = type === 'business' ? 'business' : 'individual';
  
      this.basicPlanService.rereq(id, planType, this.userProfile).subscribe(
        updatedUserData => {
          this.updatedUser = updatedUserData;
          console.log('User profile updated:', updatedUserData);
  
          // Show success message
          this.snackBar.open('Recharge successful', 'Close', {
            duration: 3000,
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
      

      if (result === 'confirmed') {
        // Call the recharge method if confirmed
        this.recharge(plan.id, this.selectedType);
      }
    });
  }

  // To display the details  of the plans when user clicks the view-details button

  openDetailsModal(plan:any): void {
    this.selectedPlan = plan;
  
    const dialogRef = this.dialog.open(ViewDetailsComponent, {
      width: '80%',
      height: 'auto',
      maxWidth: '400px',
      maxHeight: '500px',
      panelClass: 'custom-modal-container',
      data: { plan: this.selectedPlan } 
    });
  }

}




