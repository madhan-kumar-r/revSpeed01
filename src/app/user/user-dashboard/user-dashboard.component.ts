import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  title = 'User_side';
  isDropdownOpen = false;
dropdownMenu: any;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  navigateTo(option: string) {
    console.log('Navigating to', option);
    // Implement navigation logic here if needed
  }


}

