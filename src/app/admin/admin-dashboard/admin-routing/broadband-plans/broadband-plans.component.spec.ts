import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadbandPlansComponent } from './broadband-plans.component';

describe('BroadbandPlansComponent', () => {
  let component: BroadbandPlansComponent;
  let fixture: ComponentFixture<BroadbandPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BroadbandPlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BroadbandPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
