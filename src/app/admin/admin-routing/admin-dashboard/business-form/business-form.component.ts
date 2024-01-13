import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BusinessPlansService } from '../services/business-plans.service';
import { DialogRef } from '@angular/cdk/dialog';
import { error, log } from 'console';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrl: './business-form.component.css',
})
export class BusinessFormComponent {
  businessForm: FormGroup;

  cycle: string[] = ['Monthly', 'Quarterly', 'Semi-Annually', 'Annually'];
  constructor(
    private _fb: FormBuilder,
    private _businessService: BusinessPlansService,
    private _dialogRef: MatDialogRef<BusinessFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.businessForm = this._fb.group({
      billing_cycle: '',
      plan_name: '',
      plan_speed: '',
      // speed: '',
      plan_price: '',
    });
  }

  ngOnInit(): void {
    this.businessForm.patchValue(this.data);
  }

  onSubmit() {
    /* const { planCycle, planName, planSpeed, planPrice, speed } =
      this.businessForm.value;

      const plan_speed = `${planSpeed} ${speed}`;
      const payload = {
        planCycle,
        planName,
        plan_speed,
        planPrice,
      }; */

    if (this.businessForm.valid) {
      if (this.data) {
        this._businessService
          .updateBusinessPlansList(this.data.id, this.businessForm.value)
          .subscribe({
            next: (val) => {
              this._coreService.openSnackBar('Updated Plan', 'Done');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.log(err);
            },
          });
      } else {
        this._businessService
          .addBusinessPlansList(this.businessForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Added Plan', 'Done');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.log(err);
            },
          });
      }
    }
  }
}