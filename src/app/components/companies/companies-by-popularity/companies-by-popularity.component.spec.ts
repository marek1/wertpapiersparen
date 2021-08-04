import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompaniesByPopularityComponent } from './companies-by-popularity.component';

describe('CompaniesByPopularityComponent', () => {
  let component: CompaniesByPopularityComponent;
  let fixture: ComponentFixture<CompaniesByPopularityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesByPopularityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesByPopularityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
