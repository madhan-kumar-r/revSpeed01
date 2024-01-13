import { Component, OnInit } from '@angular/core';
import { PlansService } from '../services/plans.service';

import { FormComponent } from '../form/form.component';
import { MatDialog } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'broadband-plans',
  templateUrl: './broadband-plans.component.html',
  styleUrls: ['./broadband-plans.component.css'],
})
export class BroadbandPlansComponent implements OnInit {
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
    private _plansService: PlansService,
    private _dialog: MatDialog,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getPlansList();
  }

  openAddPlanForm() {
    const dialogRef = this._dialog.open(FormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPlansList();
        }
      },
    });
  }

  getPlansList() {
    this._plansService.getPlans().subscribe({
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

  deletePlan(id: number) {
    this._plansService.deletePlan(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Plan deleted!', 'Done');
        this.getPlansList();
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(FormComponent, {
      data: data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPlansList();
        }
      },
    });
  }
}