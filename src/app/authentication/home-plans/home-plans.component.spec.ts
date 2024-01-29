import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlansComponent } from './home-plans.component';

describe('HomePlansComponent', () => {
  let component: HomePlansComponent;
  let fixture: ComponentFixture<HomePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
