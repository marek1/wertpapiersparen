import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompaniesListInIndustryComponent } from './companies-list-in-industry.component';

describe('CompaniesListInIndustryComponent', () => {
  let component: CompaniesListInIndustryComponent;
  let fixture: ComponentFixture<CompaniesListInIndustryComponent>;

  beforeEach(async(() => {
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
