import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.css'
})
export class ViewDetailsComponent {
plan: any;
detailsDataSource: any[] | undefined;
detailsColumns: string[] = ['speed', 'internet'];

  constructor(public dialogRef: MatDialogRef<ViewDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.plan = data.plan;  // Retrieve plan details from data
    }

  closeModal(): void {
    this.dialogRef.close();
  }

  recharge(): void {
    // Add recharge functionality here
    this.closeModal();
  }



  
}
