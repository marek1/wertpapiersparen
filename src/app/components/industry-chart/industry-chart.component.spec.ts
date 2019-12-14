import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryChartComponent } from './industry-chart.component';

describe('IndustryChartComponent', () => {
  let component: IndustryChartComponent;
  let fixture: ComponentFixture<IndustryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
