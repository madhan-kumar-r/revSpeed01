import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BasicPlanService } from '../../basic-plan/basic-plan.service';
import { i_plans } from './card';
import { b_plans } from './card';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RechargeDialogComponent } from '../../recharge-dialog/recharge-dialog.component';
import { ViewDetailsComponent } from '../../view-details/view-details.component';
import { Iuser } from '../../user/user';
@Component({
  selector: 'app-business-plans',
  templateUrl: './business-plans.component.html',
  styleUrl: './business-plans.component.css'
})
export class BusinessPlansComponent {
  updatedUser !: Iuser;
  userProfile !: Iuser;
  
  plans: i_plans[] = [] ;
  bplans: b_plans[] = [];
  selectedType: string = 'individual';
  selectedPlan : i_plans | undefined;

  constructor(private basicPlanService: BasicPlanService, private snackBar: MatSnackBar, public dialog: MatDialog,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchData();
    console.log(localStorage.getItem('profiledata'));
   const user= localStorage.getItem('profiledata');
   if(user!=null)
   {
    this.userProfile=JSON.parse(user);
   } 
   
  console.log(this.userProfile);
   
  }

  selectType(type: string): void {
    if (type === 'individual') {
      this.basicPlanService.getIndividualPlans().subscribe(
        (plans) => {
          this.plans = plans;
          this.cdr.markForCheck();
        },
        (error) => {
          console.error('Error fetching individual plans:', error);
        }
      );
    } else if (type === 'business') {
      this.basicPlanService.getBusinessPlans().subscribe(
        (bplans) => {
          this.bplans = bplans;
          this.cdr.markForCheck();
        },
        (error) => {
          console.error('Error fetching business plans:', error);
        }
      );
    }
  }

  getFilteredPlans(): any[] {
    return this.selectedType === 'individual' ? this.plans : this.bplans;
  }

  fetchData(): void {
    this.selectType('individual'); // Default to individual plans
  }


  // recharge(id: number, type: string): void {
  //   console.log(type);
    

  //   if (this.userProfile) {
  //     const planType = type === 'business' ? 'business' : 'individual';

  //     this.basicPlanService.rereq(id, planType, this.userProfile).subscribe(
  //       updatedUserData => {
  //         console.log('User profile updated:', updatedUserData);

  //         this.snackBar.open('Recharge successful', 'Close', {
  //           duration: 3000,
  //         });
  //       },
  //       error => {
  //         console.error('updated', error);

  //         this.snackBar.open('Recharge failed', 'Close', {
  //           duration: 3000,
  //         });
  //       }
  //     );
  //   } 
  // }

  recharge(id: number, type: string): void {
    if (this.userProfile) {
      const selectedPlan = type === 'business' ? this.bplans.find((plan) => plan.id === id) : this.plans.find((plan) => plan.id === id);

      if (selectedPlan) {
        this.basicPlanService.rechargePlan(selectedPlan, this.userProfile).subscribe(
          (updatedUserData) => {
            console.log('User profile updated:', updatedUserData);

            this.snackBar.open('Recharge successful', 'Close', {
              duration: 3000,
            });
          },
          (error) => {
            console.error('Recharge failed', error);

            this.snackBar.open('Recharge failed', 'Close', {
              duration: 3000,
            });
          }
        );
      } else {
        console.error('Selected plan not found');
      }
    }
  }

  blurBackground: boolean = false;
  isRechargeDialogOpen: boolean = false;

  openRechargeDialog(plan: i_plans): void {
    // Set the flag to blur the background
    this.selectedPlan = plan;
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
        this.recharge(plan.id,plan.planType);
  console.log('Selected Plan:', this.selectedPlan);

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
