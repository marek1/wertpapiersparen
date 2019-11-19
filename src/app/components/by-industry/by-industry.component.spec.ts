import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByIndustryComponent } from './by-industry.component';

describe('ByIndustryComponent', () => {
  let component: ByIndustryComponent;
  let fixture: ComponentFixture<ByIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
