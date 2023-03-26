import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeebackpageComponent } from './feebackpage.component';

describe('FeebackpageComponent', () => {
  let component: FeebackpageComponent;
  let fixture: ComponentFixture<FeebackpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeebackpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeebackpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
