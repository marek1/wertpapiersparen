import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksIndustryChartComponent } from './stocks-industry-chart.component';

describe('StocksIndustryChartComponent', () => {
  let component: StocksIndustryChartComponent;
  let fixture: ComponentFixture<StocksIndustryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksIndustryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksIndustryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
