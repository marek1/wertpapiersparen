import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritiesListInIndustryComponent } from './securities-list-in-industry.component';

describe('SecuritiesListInIndustryComponent', () => {
  let component: SecuritiesListInIndustryComponent;
  let fixture: ComponentFixture<SecuritiesListInIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritiesListInIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritiesListInIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
