import { Component, EventEmitter, Output } from '@angular/core';
import { PlansService } from '../services/plans.service';
import { Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  planForm: FormGroup;

  cycle: string[] = ['Monthly', 'Quarterly', 'Semi-Annually', 'Annually'];

  constructor(
    private _fb: FormBuilder,
    private _plansService: PlansService,
    private _dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.planForm = this._fb.group({
      billing_cycle: '',
      plan_name: '',
      plan_speed: '',
      // speed: '',
      plan_price: '',
    });
  }

  ngOnInit(): void {
    this.planForm.patchValue(this.data);
  }

  onSubmit() {
    if (this.planForm.valid) {
      if (this.data) {
        this._plansService
          .updatePlan(this.data.id, this.planForm.value)
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
        this._plansService.addPlan(this.planForm.value).subscribe({
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
