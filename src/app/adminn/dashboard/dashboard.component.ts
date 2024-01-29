// dashboard.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import Chart from 'chart.js/auto';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'customer_name',
    'customer_address',
    'customer_phone',
    'customer_email',
  ];
  dataSource!: MatTableDataSource<any>;

  customersWithPlan: any[] = [];
  customersWithoutPlan: any[] = [];
  individualCustomers: any[] = [];
  businessCustomers: any[] = [];
  public chart: any;
  public barChart: any;

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((customerData: any[]) => {
      this.customersWithPlan = customerData.filter(
        (customer) => customer.plan_id !== null
      );

      this.customersWithoutPlan = customerData.filter(
        (customer) => customer.plan_id === null
      );

      this.customersWithPlan.forEach((customer) => {
        if (customer.plan_type === 'Individual') {
          this.individualCustomers.push(customer);
        } else if (customer.plan_type === 'Business') {
          this.businessCustomers.push(customer);
        }
      });

      this.createChart(this.customersWithPlan, this.customersWithoutPlan);
      this.createChartTwo(this.businessCustomers, this.individualCustomers);
    });
  }

  activeUsersTableVisible: boolean = true;
  inactiveUsersTableVisible: boolean = false;
  individualUsersTableVisible: boolean = false;
  businessUsersTableVisible: boolean = false;

  toggleUserTable(table: string) {
    this.activeUsersTableVisible = table === 'active';
    this.inactiveUsersTableVisible = table === 'inactive';
    this.individualUsersTableVisible = table === 'individual';
    this.businessUsersTableVisible = table === 'business';
  }

  createChart(withPlan: any[], withoutPlan: any[]) {
    this.chart = new Chart('MyChart', {
      type: 'pie',
      data: {
        labels: ['Inactive users', 'Active users'],
        datasets: [
          {
            data: [withoutPlan.length, withPlan.length],
            backgroundColor: ['#e74c3c', '#11235A'],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }

  createChartTwo(businessCustomers: any[], individualCustomers: any[]) {
    this.chart = new Chart('MyChartTwo', {
      type: 'pie',
      data: {
        labels: ['Individual plan users', 'Business plan users'],
        datasets: [
          {
            data: [individualCustomers.length, businessCustomers.length],
            backgroundColor: ['#2ecc71', '#3E3232'],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
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
