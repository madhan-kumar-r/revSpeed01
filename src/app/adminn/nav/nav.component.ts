import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Admin } from '../Admin';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  admin!: Admin;
  constructor() {
    const data = localStorage.getItem('profiledata');

    if (data != null) {
      this.admin = JSON.parse(data);
    }
    console.log();
  }
  private breakpointObserver = inject(BreakpointObserver);
  name: String = 'Madhan';

  isMobile$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
