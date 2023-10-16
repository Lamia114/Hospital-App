import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePrescriptionsComponent } from './manage-prescriptions.component';

describe('ManagePrescriptionsComponent', () => {
  let component: ManagePrescriptionsComponent;
  let fixture: ComponentFixture<ManagePrescriptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagePrescriptionsComponent]
    });
    fixture = TestBed.createComponent(ManagePrescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
