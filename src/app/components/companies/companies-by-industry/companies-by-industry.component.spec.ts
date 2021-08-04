import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CompaniesByIndustryComponent } from './companies-by-industry.component';

describe('CompaniesByIndustryComponent', () => {
  let component: CompaniesByIndustryComponent;
  let fixture: ComponentFixture<CompaniesByIndustryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesByIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesByIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
