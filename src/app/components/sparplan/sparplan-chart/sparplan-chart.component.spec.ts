import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SparplanChartComponent } from './sparplan-chart.component';

describe('SparplanChartComponent', () => {
  let component: SparplanChartComponent;
  let fixture: ComponentFixture<SparplanChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SparplanChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparplanChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
