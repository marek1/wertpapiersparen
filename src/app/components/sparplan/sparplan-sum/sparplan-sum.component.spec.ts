import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SparplanSumComponent } from './sparplan-sum.component';

describe('SparplanSumComponent', () => {
  let component: SparplanSumComponent;
  let fixture: ComponentFixture<SparplanSumComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SparplanSumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparplanSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
