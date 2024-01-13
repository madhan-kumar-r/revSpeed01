import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BusinessFormComponent } from '../business-form/business-form.component';
import { BusinessPlansService } from '../services/business-plans.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CoreService } from '../core/core.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-business-plans',
  templateUrl: './business-plans.component.html',
  styleUrl: './business-plans.component.css',
})
export class BusinessPlansComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'billing_cycle',
    'plan_name',
    'plan_speed',
    'plan_price',
    'actions',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _businessService: BusinessPlansService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getBusinessPlansList();
  }

  openAddPlanForm() {
    const dialogRef = this._dialog.open(BusinessFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getBusinessPlansList();
        }
      },
    });
  }

  openDeleteDialog() {
    this._dialog.open(DeleteDialogComponent);
  }

  getBusinessPlansList() {
    this._businessService.getBusinessPlansList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteBusinessPlan(id: number) {
    this._businessService.deleteBusinessPlan(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Plan deleted', 'Done');
        this.getBusinessPlansList();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(BusinessFormComponent, {
      data: data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getBusinessPlansList();
        }
      },
    });
  }
}