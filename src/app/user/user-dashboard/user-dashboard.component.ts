import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
  animations: [
    trigger('dropdownIconAnimation', [
      state('open', style({ transform: 'translateY(-50%) rotate(180deg)' })),
      state('closed', style({ transform: 'translateY(-50%)' })),
      transition('open <=> closed', animate('300ms ease')),
    ]),
  ],
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

