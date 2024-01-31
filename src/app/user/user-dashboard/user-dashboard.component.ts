  import { animate, state, style, transition, trigger } from '@angular/animations';
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-dashboard.component.html',
    styleUrls: ['./user-dashboard.component.css'],
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


  stylishAdImages: { url: string; alt: string }[] = [
    { url: 'https://example.com/ad1.jpg', alt: 'Ad 1' },
    { url: 'https://example.com/ad2.jpg', alt: 'Ad 2' },
    { url: 'https://example.com/ad3.jpg', alt: 'Ad 3' },
    // Add more ad images as needed
  ];

  // ... 


    toggleDropdown() {
      console.log("entered dropdown");
      
      this.isDropdownOpen = !this.isDropdownOpen;
    }

    navigateTo(option: string) {
      console.log('Navigating to', option);
      // Implement navigation logic here if needed
    }
logout()
{
  localStorage.clear();
}

  }

