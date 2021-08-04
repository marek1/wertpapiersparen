import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CompaniesListInIndustryComponent } from './companies-list-in-industry.component';

describe('CompaniesListInIndustryComponent', () => {
  let component: CompaniesListInIndustryComponent;
  let fixture: ComponentFixture<CompaniesListInIndustryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesListInIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesListInIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
