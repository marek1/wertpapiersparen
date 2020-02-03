import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparplanChartComponent } from './sparplan-chart.component';

describe('SparplanChartComponent', () => {
  let component: SparplanChartComponent;
  let fixture: ComponentFixture<SparplanChartComponent>;

  beforeEach(async(() => {
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
