
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BasicPlanService } from '../basic-plan/basic-plan.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recharge-dialog',
  templateUrl: './recharge-dialog.component.html',
  styleUrl: './recharge-dialog.component.css'
})
export class RechargeDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RechargeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private basicPlanService: BasicPlanService,
    private snackBar: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    // Handle 'Yes' click if needed
    this.dialogRef.close("confirmed");
    debugger
    // this.basicPlanService.rereq(this.data.plan.plan.id, this.data.plan.plan.plan_type, this.data.users).subscribe(

    //   updatedUserData => {

    //     console.log('User profile updated:', updatedUserData);


    //     // Show success message
    //     this.snackBar.open('Recharge successful', 'Close', {
    //       duration: 2000,  // Duration in milliseconds
    //     });
    //   },
    //   error => {
    //     console.error('updated', error);

    //     // Show error message
    //     this.snackBar.open('Recharge failed', 'Close', {
    //       duration: 2000,
    //     });
    //   }
    // );

  }
}
