import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtfSectorChartComponent } from './etf-sector-chart.component';

describe('EtfSectorChartComponent', () => {
  let component: EtfSectorChartComponent;
  let fixture: ComponentFixture<EtfSectorChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtfSectorChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtfSectorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
