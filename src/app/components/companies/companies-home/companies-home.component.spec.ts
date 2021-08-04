import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompaniesHomeComponent } from './companies-home.component';

describe('CompaniesHomeComponent', () => {
  let component: CompaniesHomeComponent;
  let fixture: ComponentFixture<CompaniesHomeComponent>;

  beforeEach(waitForAsync(() => {
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
