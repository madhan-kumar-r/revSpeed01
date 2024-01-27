// dashboard.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import Chart from 'chart.js/auto';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'customer_name',
    'customer_phone',
    'customer_address',
    'customer_email',
    'plan_id',
    'plan_type',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  customersWithPlan: any[] = [];
  customersWithoutPlan: any[] = [];
  individualCustomers: any[] = [];
  businessCustomers: any[] = [];
  public chart: any;
  public barChart: any;

  constructor(private userService: UsersService) {}

  dataSourceWithPlan = new MatTableDataSource<any>([]);
  dataSourceWithoutPlan = new MatTableDataSource<any>([]);
  dataSourceIndividual = new MatTableDataSource<any>([]);
  dataSourceBusiness = new MatTableDataSource<any>([]);

  ngOnInit() {
    this.userService.getUsers().subscribe((customerData: any[]) => {
      this.customersWithPlan = customerData.filter(
        (customer) => customer.plan_id !== null
      );

      this.customersWithoutPlan = customerData.filter(
        (customer) => customer.plan_id === null
      );

      // Filter plan_type for 'Individual' and 'Business'
      this.customersWithPlan.forEach((customer) => {
        if (customer.plan_type === 'Individual') {
          this.individualCustomers.push(customer);
        } else if (customer.plan_type === 'Business') {
          this.businessCustomers.push(customer);
        }
      });

      // Assign data to data sources
      this.dataSourceWithPlan.data = this.customersWithPlan;
      this.dataSourceWithoutPlan.data = this.customersWithoutPlan;
      this.dataSourceIndividual.data = this.individualCustomers;
      this.dataSourceBusiness.data = this.businessCustomers;
    });

    this.createChart();
    this.createChartTwo();
    // this.createBarChart();
  }

  activeUsersTableVisible: boolean = true;
  inactiveUsersTableVisible: boolean = false;
  individualUsersTableVisible: boolean = false;
  businessUsersTableVisible: boolean = false;

  showActiveUsersTable() {
    this.activeUsersTableVisible = true;
    this.inactiveUsersTableVisible = false;
    this.individualUsersTableVisible = false;
    this.businessUsersTableVisible = false;
  }

  showInactiveUsersTable() {
    this.activeUsersTableVisible = false;
    this.inactiveUsersTableVisible = true;
    this.individualUsersTableVisible = false;
    this.businessUsersTableVisible = false;
  }

  showIndividualUsersTable() {
    this.activeUsersTableVisible = false;
    this.inactiveUsersTableVisible = false;
    this.individualUsersTableVisible = true;
    this.businessUsersTableVisible = false;
  }

  showBusinessUsersTable() {
    this.activeUsersTableVisible = false;
    this.inactiveUsersTableVisible = false;
    this.individualUsersTableVisible = false;
    this.businessUsersTableVisible = true;
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'pie',
      data: {
        labels: ['Inactive users', 'Active users'],
        datasets: [
          {
            data: [9, 31],
            backgroundColor: ['#e74c3c', '#11235A'],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 1,
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }

  createChartTwo() {
    this.chart = new Chart('MyChartTwo', {
      type: 'pie',
      data: {
        labels: ['Individual plan users', 'Business plan users'],
        datasets: [
          {
            data: [19, 12],
            backgroundColor: ['#2ecc71', '#3E3232'],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 3,
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }

  // createBarChart() {
  //   const ctx = document.getElementById('MyBarChart') as HTMLCanvasElement;
  //   this.barChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
  //       datasets: [
  //         {
  //           label: 'Bar Chart Data',
  //           data: [10, 20, 30, 40, 50],
  //           backgroundColor: '#3498db', // Bar color
  //           borderColor: '#2980b9', // Border color
  //           borderWidth: 1, // Border width
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         x: {
  //           display: true,
  //           title: {
  //             display: true,
  //             text: 'X-Axis Label',
  //           },
  //         },
  //         y: {
  //           display: true,
  //           title: {
  //             display: true,
  //             text: 'Y-Axis Label',
  //           },
  //         },
  //       },
  //     },
  //   });
  // }
}
