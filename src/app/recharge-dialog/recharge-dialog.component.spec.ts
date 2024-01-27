import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeDialogComponent } from './recharge-dialog.component';

describe('RechargeDialogComponent', () => {
  let component: RechargeDialogComponent;
  let fixture: ComponentFixture<RechargeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechargeDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechargeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
