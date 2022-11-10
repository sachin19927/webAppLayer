import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdductManagementComponent } from './prodduct.management.component';

describe('ProdductManagementComponent', () => {
  let component: ProdductManagementComponent;
  let fixture: ComponentFixture<ProdductManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdductManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdductManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
