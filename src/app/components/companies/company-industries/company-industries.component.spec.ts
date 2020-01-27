import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyIndustriesComponent } from './company-industries.component';

describe('CompanyIndustriesComponent', () => {
  let component: CompanyIndustriesComponent;
  let fixture: ComponentFixture<CompanyIndustriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyIndustriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
