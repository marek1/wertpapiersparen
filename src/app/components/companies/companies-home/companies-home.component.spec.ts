import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesHomeComponent } from './companies-home.component';

describe('CompaniesHomeComponent', () => {
  let component: CompaniesHomeComponent;
  let fixture: ComponentFixture<CompaniesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
