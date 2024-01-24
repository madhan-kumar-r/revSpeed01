import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPlansComponent } from './business-plans.component';

describe('BusinessPlansComponent', () => {
  let component: BusinessPlansComponent;
  let fixture: ComponentFixture<BusinessPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessPlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
