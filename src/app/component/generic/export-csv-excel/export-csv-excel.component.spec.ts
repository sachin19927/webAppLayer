import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCsvExcelComponent } from './export-csv-excel.component';

describe('ExportCsvExcelComponent', () => {
  let component: ExportCsvExcelComponent;
  let fixture: ComponentFixture<ExportCsvExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportCsvExcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportCsvExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
