import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSearchDetailsComponent } from './employee-search-details.component';

describe('EmployeeSearchDetailsComponent', () => {
  let component: EmployeeSearchDetailsComponent;
  let fixture: ComponentFixture<EmployeeSearchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSearchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
