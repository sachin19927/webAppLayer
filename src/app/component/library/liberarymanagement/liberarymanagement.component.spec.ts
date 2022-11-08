import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberarymanagementComponent } from './liberarymanagement.component';

describe('LiberarymanagementComponent', () => {
  let component: LiberarymanagementComponent;
  let fixture: ComponentFixture<LiberarymanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiberarymanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiberarymanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
